import React from "react";

const Tweet = (tweetList) => {
  return (
    <div>
      {tweetList.tweetList[0]
        ? tweetList.tweetList[0].map((tweet, index) => (
            <div key={index} className="tweet card my-4">
              <div className="card-body">
                <h5 className="card-title"> {`${tweet.tweet.data.text}`} </h5>
                <h6 className="card-subtitle mb-2 text-muted">{`@${tweet.tweet.includes.users[0].username}`}</h6>
                <a
                  href={`https://twitter.com/${tweet.tweet.includes.users[0].username}/status/${tweet.tweet.data.id}`}
                  className="btn btn-primary mt-3"
                >
                  <i className="fab fa-twitter"></i> Go To Tweet
                </a>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Tweet;
