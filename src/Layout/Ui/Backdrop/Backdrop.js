import React from "react";
import classes from "./Backdrop.module.css"

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.disable} ></div>
    )
}

export default Backdrop;
