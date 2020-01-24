import React from "react";
import classes from "./Drawer.module.css";
import classNames from "classnames";
import Backdrop from "../../UI/Backdrop/Backdrop";
import MenuButtonClose from "../../Navigation/MenuButtonClose/MenuButtonClose";
import MenuButtonOpen from "../../Navigation/MenuButtonOpen/MenuButtonOpen";
import MenuLinks from "../MenuLinks/MenuLinks";

const Drawer = props => {
  let classNamesDrawer = "";
  if (props.isOpen) {
    classNamesDrawer = classNames(props.className, classes["Drawer"]);
  } else {
    classNamesDrawer = classNames(
      props.className,
      classes["Drawer"],
      classes["close"]
    );
  }

  return (
    <>
      <MenuButtonOpen onClick={props.onToggle} />
      <MenuLinks onClick={props.onClose} className={classNamesDrawer}>
        <MenuButtonClose onClick={props.onClose} />
      </MenuLinks>
      {props.children}
      {props.isOpen ? <Backdrop onClick={props.onClose} /> : null}
    </>
  );
};
export default Drawer;
