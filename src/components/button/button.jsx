import React from "react";
import './button.css';

const Button = ({name}) => {
    return (
        <div className="button">
         <p className="btnname">{name}</p>
        </div>
    )
}

export default Button;