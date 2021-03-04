import React from "react";
import classes from "./Card"

const Card = (props) => {
    const {title, originalTitle} = props
    return(
        <div className={classes.card}>
            <p>{title}</p>
            <p>{originalTitle}</p>
        </div>
    )
}

export default Card;