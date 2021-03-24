import React from "react";
import classes from "./Card.module.css";
import { withRouter } from "react-router-dom";

const Card = (props) => {
  const { title, originalTitle, image, movieId } = props;
  const viewDetailsHandler = () => {
    props.history.push(`${props.match.path}/${movieId}`);
  };

  return (
    <div className={classes.card}>
      <img
        onClick={viewDetailsHandler}
        className={classes.coverImage}
        src={require(`../../../../assets/images/coverImages/${image}`).default}
        alt="cover"
      />
      <p className={classes.title}>{title}</p>
      <p className={classes.originalTitle}>{originalTitle}</p>
    </div>
  );
};

export default withRouter(Card);
