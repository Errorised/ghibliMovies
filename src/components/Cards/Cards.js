import React, { Fragment, useEffect, useState } from "react";
import Card from "./Card/Card";
import axios from "axios";
import classes from "./Cards.module.css";

const Cards = () => {
  const apiURL = "https://ghibliapi.herokuapp.com/films/";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(apiURL);
    const includingImage = await response.data.map((item) => {
      return {
        ...item,
        image: `${item.title.toLowerCase().split(" ").join("")}.jpg`,
      };
    });
    console.log(includingImage);
    setData(includingImage);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.cards}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => {
          console.log(item);
          return (
            <Card
              title={item.title}
              originalTitle={item.original_title}
              key={item.id}
              image={item.image}
            />
          );
        })
      )}
    </div>
  );
};

export default Cards;
