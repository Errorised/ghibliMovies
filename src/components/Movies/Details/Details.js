import React, { Fragment, useEffect, useState } from "react";
import classes from "./Details.module.css";
import axios from "../../../axios-base";

const Details = (props) => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
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
    fetchData();
  }, [props.match.params.id]);

  // //Using object to map jsx
  // const detailsArr = Object.entries(details);
  // const output = detailsArr.map(([key, value]) => {
  //   return (
  //     <p>
  //       {key} : {value}
  //     </p>
  //   );
  // });

  return (
    <Fragment>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={classes.Details}>
          <h1>
            Details of: {details.title} ({details.release_date}){" "}
          </h1>
          <img
            src={
              require(`../../../assets/images/coverImages/${details.image}.jpg`)
                .default
            }
            alt={details.title}
          />
          <p>Original Title:{details.original_title} </p>
          <p>Director: {details.director} </p>
          <p>Description: {details.description} </p>
          <p>Running Time: {details.running_time} min</p>
        </div>
      )}
    </Fragment>
  );
};

export default Details;
