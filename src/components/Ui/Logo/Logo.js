import React from "react";
import imageLogo from "../../../assets/images/Logo.jpg";
import classes from "./Logo.module.css"

const Logo = () => {
    return <img className={classes.logo} src={imageLogo} alt=" Studio Ghibli"/>
}

export default Logo;