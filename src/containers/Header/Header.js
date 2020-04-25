import React from "react";
import classes from "./Header.module.css";
import Logo from "../../components/UI/Logo/Logo";
import classNames from "classnames";
import { Button } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AddIcon from "@material-ui/icons/Add";
import Search from "../../components/UI/Search/Search";

// import MenuLinks from "../../components/Navigation/MenuLinks/MenuLinks";
// import Drawer from "../../components/Navigation/Drawer/Drawer";

const Header = (props) => {
  const HeaderClassNames = classNames(props.className, classes["Header"]);
  return (
    <header className={HeaderClassNames} onClick={props.onClick}>
      <div className={classes["Header-container"]}>
        <div className={classes["Header-logo"]}>
          <Logo />
        </div>
        <div className={classes["menuButtons"]}>
          <Search />
          <Button className={classes["create"]} startIcon={<AddIcon />}>
            Создать
          </Button>
          <div className={classes["authContainer"]}>
            <Button className={classes["login"]} startIcon={<ExitToAppIcon />}>
              Вход
            </Button>
            <Button className={classes["green"]}>Регистрация</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
