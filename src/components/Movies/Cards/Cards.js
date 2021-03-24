import React, { Fragment, useEffect, useState } from "react";
import axios from "../../../axios-base";
import classes from "./Cards.module.css";
import { withRouter } from "react-router-dom";

import Card from "./Card/Card";
import SearchBar from "../../SearchBar/SearchBar";

const Cards = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const response = await axios.get("/films");
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
        } else {
          return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        }
      })
      .map((item) => {
        return (
          <Card
            title={item.title}
            originalTitle={item.original_title}
            key={item.id}
            image={item.image}
            movieId={item.id}
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

export default withRouter(Cards);
