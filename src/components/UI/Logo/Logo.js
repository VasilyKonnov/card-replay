import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Logo.module.css";
import classNames from "classnames";

const Logo = props => {
  const LogoClassNames = classNames(props.className, classes["Logo"]);
  return (
    <div className={LogoClassNames} onClick={props.onClick}>
      <NavLink to="/" exact={true}>
        Card Replay
      </NavLink>
    </div>
  );
};

export default Logo;
