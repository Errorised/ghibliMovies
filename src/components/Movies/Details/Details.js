import React, { Fragment, useEffect, useState } from "react";
import classes from "./Details.module.css";
import axios from "../../../axios-base";


const Details = (props) => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(`/films/${props.match.params.id}`);
    const convertedImageName = response.data.title
      .toLowerCase()
      .split(" ")
      .join("");
    const includingImage = { ...response.data, image: convertedImageName };
    setDetails(includingImage);
    setLoading(false);
  };
  console.log(details);
  return (
    <Fragment>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={classes.Details}>
          <img
            src={
              require(`../../../assets/images/coverImages/${details.image}.jpg`)
                .default
            }
          />
          <h1>Details of: {details.title} </h1>
          <p></p>
        </div>
      )}
    </Fragment>
  );
};

export default Details;
