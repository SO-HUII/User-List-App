import React from "react";
import classes from './Butoon.module.css';

const Button = props => {
    return (
        <button 
            className={classes.button} 
            type={props.type || 'button'}
            onClick={props.onCLick}
        >
            {props.children}
        </button>
    )
};

export default Button;