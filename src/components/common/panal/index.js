import React from "react";
import './styles.css'
import classNames from "classnames";

const Panal = props => {

    const panalStyle = classNames('panal')
         

    return (
        <div className={panalStyle} style={props.retweetedStyle ===true ? {backgroundColor: '#eaeaea59'} : {}}>
            {props.children}
        </div>
    );
};
export { Panal };