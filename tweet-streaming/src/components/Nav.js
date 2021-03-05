import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a href="#" className="navbar-brand">
          Tweet Streaming
          <input className="keyword" placeholder=" keyword" type="text" />
          <label for="images">Images</label>
          <input className="image-checkbox" type="checkbox" id="images" />
          <label for="retweets">Retweets</label>
          <input className="retweet-checkbox" type="checkbox" id="retweets" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
