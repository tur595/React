const http = require("http");
const cors = require("cors");
const path = require("path");
const express = require("express");
const socketIo = require("socket.io");
const needle = require("needle");
const config = require("dotenv").config();
const TOKEN = process.env.TWITTER_BEARER_TOKEN;
const PORT = process.env.PORT || 3001;

const app = express();

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

app.get("/", (req, res) => {
  res.send("Server up");
});

const rulesURL = "https://api.twitter.com/2/tweets/search/stream/rules";
const streamURL =
  "https://api.twitter.com/2/tweets/search/stream?tweet.fields=public_metrics&expansions=author_id";

const rules = [{ value: "giveaway " }];

//get stream rules
async function getRules() {
  const response = await needle("get", rulesURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return response.body;
}

//set stream rules
async function setRules() {
  const data = {
    add: rules,
  };
  const response = await needle("post", rulesURL, data, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return response.body;
}

//delete stream rules
async function deleteRules(rules) {
  if (!Array.isArray(rules.data)) {
    return null;
  }

  const ids = rules.data.map((rule) => rule.id);

  const data = {
    delete: {
      ids: ids,
    },
  };
  const response = await needle("post", rulesURL, data, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return response.body;
}

function streamTweets() {
  const stream = needle.get(streamURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  stream.on("data", (data) => {
    try {
      const json = JSON.parse(data);
      console.log(json);
    } catch (error) {}
  });
}

io.on("connection", () => {
  console.log("Client connected");
});

// (async () => {
//   let currentRules;

//   try {
//     // get all stream rules
//     currentRules = await getRules();
//     // delete all stream rules
//     await deleteRules(currentRules);
//     // set rules on array above
//     await setRules();
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }

//   streamTweets();
// })();

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
