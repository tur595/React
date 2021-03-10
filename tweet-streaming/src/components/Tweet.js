import React from "react";

const Tweet = (tweetData) => {
  //console.log(tweetData.tweetData);
  //console.log(typeof tweetData.tweetData[0]);
  return (
    <div>
      {tweetData.tweetData ? (
        <div className="tweet card my-4">
          <div className="card-body">
            <h5 className="card-title"> {`${tweetData.tweetData.text}`} </h5>
            <h6 className="card-subtitle mb-2 text-muted">{`${tweetData.tweetData.username}`}</h6>
            <a href="https://twitter.com" className="btn btn-primary mt-3">
              <i className="fab fa-twitter"></i> Go To Tweet
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Tweet;
