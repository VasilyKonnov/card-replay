import React from "react";
import classes from "./Footer.module.css";
import classNames from "classnames";
// import { NavLink } from "react-router-dom";

const Footer = props => {
  const FooterClassNames = classNames(props.className, classes["Footer"]);
  return (
    <footer className={FooterClassNames} onClick={props.onClick}>
      <div className={classes["Footer-container"]}>
        <div className={classes["Footer-copyright"]}>
          &copy; {1900 + new Date().getYear()}
        </div>
        <a
          target="_blank"
          className={classes["Developer"]}
          href="https://vk.com/vasily_konnov"
        >
          Разработчик
        </a>
      </div>
    </footer>
  );
};

export default Footer;
