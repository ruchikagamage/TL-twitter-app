import React, { Component } from "react";
import "./styles.css";

const Loader = () => {
  return (
    <div>
      <div className="twitter-bird-animation" />
      <div className="loading">
        <span className="text f-w-regular">Loading</span>
        <span className="blob1 blob" />
        <span className="blob2 blob" />
        <span className="blob3 blob" />
      </div>
    </div>
  );
};

export { Loader };
