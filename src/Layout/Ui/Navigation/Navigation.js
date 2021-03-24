import React, { Fragment, useRef, useState } from "react";
import classes from "./Navigation.module.css";
import Backdrop from "../Backdrop/Backdrop";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navLinksRef = useRef();
  const [activeNav, setActiveNav] = useState("");
  const toggleNavigationHandler = () => {
    if (activeNav === "") {
      setActiveNav("navActive");
    } else {
      setActiveNav("");
    }

    console.log(navLinksRef.current);
  };

  const disableNav = () => {
    setActiveNav("");
  };

  return (
    <Fragment>
      <header>
        <nav>
          <Link to="/movies" ><p className={classes.logo}>Studio Ghibli</p></Link>
          <ul
            className={`${classes.navLinks} ${classes[activeNav]}`}
            ref={navLinksRef}
          >
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Characters</a>
            </li>
            <li>
              <a href="#">Places</a>
            </li>
          </ul>
          <div className={classes.burger} onClick={toggleNavigationHandler}>
            <div className={classes.line1}></div>
            <div className={classes.line2}></div>
            <div className={classes.line3}></div>
          </div>
        </nav>
      </header>
      {activeNav === "" ? null : <Backdrop disable={disableNav} />}
    </Fragment>
  );
};

export default Navigation;
