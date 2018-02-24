import React from "react";
import "./styles.css";
import twitterLogo from './../../../../src/images/Twitter-PNG-Image-68651 11.27.28 AM.png'

const Logo = (props) => {


    return (
        <img src={twitterLogo} alt="" className="logo-style" width={props.size} height={props.size} />
    );
};
export { Logo };

