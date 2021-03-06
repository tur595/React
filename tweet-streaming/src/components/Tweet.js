import React from "react";

const Tweet = () => {
  return (
    <div className="tweet card my-4">
      <div className="card-body">
        <h5 className="card-title">today is a good day</h5>
        <h6 className="card-subtitle mb-2 text-muted">John Doe</h6>
        <a href="https://twitter.com" className="btn btn-primary mt-3">
          <i className="fab fa-twitter"></i> Go To Tweet
        </a>
      </div>
    </div>
  );
};

export default Tweet;
