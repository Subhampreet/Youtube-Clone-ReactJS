import React from "react";
import "./Cover.css";

function Cover() {
  return (
    <div className="Cover">
      <img src="./youtube.jpg" className="cover-image" />

      <div className="cover-text">
        <h2>Welcome to Youtube Clone Application !</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          <br />
          <br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <h4>Hope you have a Great Time Exploring the App ⚡!</h4>
      </div>
    </div>
  );
}

export default Cover;
