import React from 'react';
import classNames from "classnames";
import "./styles.css";

const Button = (props) => {


    const buttonStyles = classNames(
        { "button": true },
        { "btn-lg": props.lg ? true : false },
        { "button-primary": props.info ? true : false },
        { "btn-warning": props.warning ? true : false },
        { "btn-error": props.error ? true : false }
    );

    return (
        <button type="button" className={buttonStyles} onClick={props.onClick} disabled={props.disabledStatus}>{props.children}</button>     
    );
}

export { Button };


