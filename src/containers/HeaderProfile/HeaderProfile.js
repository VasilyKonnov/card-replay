import React from "react";
import classes from "./HeaderProfile.module.css";
import Logo from "../../components/UI/Logo/Logo";
import classNames from "classnames";

const Header = props => {
  const HeaderClassNames = classNames(props.className, classes["Header"]);
  return (
    <header className={HeaderClassNames} onClick={props.onClick}>
      <div className={classes["Header-container"]}>
        <div className={classes["Header-logo"]}>
          <Logo />
        </div>

        <div className={classes["Profile-block"]}>
          
        </div>

      </div>
      {props.children}
    </header>
  );
};

export default Header;
