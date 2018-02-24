import React, { Component } from "react";

class Cover extends Component {

  render() {

    let boxStyle = {height:this.props.height , marginRight:'0px'}

    return (
      <div
        className="home-right-side background-area"
        style={boxStyle}
      >
        <div className="inner-box" >
          <h1 className="f-c-white f-z-64 f-w-bold">YOUR TWITTER TIMELINE</h1>
          <h4 className="f-c-white f-z-16 f-w-regular l-s-1">© 2018 TwitterAboutHelp CenterTermsPrivacy policyCookiesAds </h4>
        </div>
      </div>
    );
  }
}

export default Cover;
