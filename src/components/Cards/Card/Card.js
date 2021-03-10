import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const { title, originalTitle, image } = props;
  return (
    <div className={classes.card}>
      <img
        className={classes.coverImage}
        src={require(`../../../assets/images/coverImages/${image}`).default}
        alt="cover image"
      />
      <p className={classes.title}>{title}</p>
      <p className={classes.originalTitle}>{originalTitle}</p>
    </div>
  );
};

export default Card;
