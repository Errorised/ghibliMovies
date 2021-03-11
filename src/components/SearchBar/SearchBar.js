import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const { value, changeSearchTerm, category } = props;

  return (
    <div className={classes.search}>
      <h1 className={classes.category}>Movies</h1>
      <input
        className={classes.searchBar}
        placeholder="Search..."
        onChange={changeSearchTerm}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
