import React, { Fragment, useEffect, useState } from "react";
import Card from "./Card/Card";
import axios from "axios";
import coverImages from "../../assets/images/coverImages/coverImages";
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
        image: `${apiURL}${item.title.toLowerCase().split(" ").join("")}.png`,
      };
    });
    console.log(includingImage);
    setData(response.data);
    setLoading(false);
  };

  const logImages = () => {
    coverImages.map((image) => {
      return <img src={image.src} alt="cover Image" />;
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.content}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => {
          return (
            <Card
              title={item.title}
              originalTitle={item.original_title}
              key={item.id}
            />
          );
        })
      )}
      {coverImages.map((image) => {
        return <img className={classes.coverImage} src={require(`../../assets/images/coverImages/${image.src}`).default} alt="cover Image" />;
      })}
    </div>
  );
};

export default Cards;
