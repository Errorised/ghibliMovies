import React, { Fragment, useEffect, useState } from "react";
import Card from "./Card/Card";
import SearchBar from "../../SearchBar/SearchBar";
import axios from "axios";
import classes from "./Cards.module.css";

const Cards = () => {
  const apiURL = "https://ghibliapi.herokuapp.com/films/";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const response = await axios.get(apiURL);
    const includingImage = await response.data.map((item) => {
      return {
        ...item,
        image: `${item.title.toLowerCase().split(" ").join("")}.jpg`,
      };
    });
    setData(includingImage);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeSearchTermHandler = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const CreateCards = () => {
    return data
      .filter((item) => {
        if (searchTerm === "") {
          return item;
        } else if (
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return item;
        }
      })
      .map((item) => {
        return (
          <Card
            title={item.title}
            originalTitle={item.original_title}
            key={item.id}
            image={item.image}
          />
        );
      });
  };

  return (
    <Fragment>
      <SearchBar
        changeSearchTerm={changeSearchTermHandler}
        value={searchTerm}
      />
      <div className={classes.cards}>
        {loading ? <p>Loading...</p> : <CreateCards />}
      </div>
    </Fragment>
  );
};

export default Cards;
