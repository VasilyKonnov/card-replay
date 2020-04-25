import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Logo.module.css";
import classNames from "classnames";
import logo from "../../../assets/img/logo.svg";
// const logo = require("../../../assets/img/logo.png");

const Logo = (props) => {
  const LogoClassNames = classNames(props.className, classes["Logo"]);
  return (
    <div className={LogoClassNames} onClick={props.onClick}>
      <NavLink to="/" exact={true}>
        {/* <img src={logo}/> */}
        {"CARD REPLAY"}
      </NavLink>
    </div>
  );
};

export default Logo;
