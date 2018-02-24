import React from "react";
import './styles.css'
import classNames from "classnames";

const Panal = props => {

    const panalStyle = classNames('panal')
         

    return (
        <div className={panalStyle}>
            {props.children}
        </div>
    );
};
export { Panal };