import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MenuLinks.module.css";
import classNames from "classnames";
import Backdrop from "../../UI/Backdrop/Backdrop";
import MenuButtonClose from "../MenuButtonClose/MenuButtonClose";
const Links = [
  { to: "/", label: "Список", exact: true },
  { to: "/theory-sections", label: "Разделы Теории", exact: false },
  { to: "/theory-section", label: "Раздел", exact: false }
];

export default class MenuLinks extends Component {
  renderLinks() {
    return Links.map((Link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={Link.to}
            exact={Link.exact}
            activeClassName={classes["active"]}
            onClick={this.props.onClose}
          >
            {Link.label}
          </NavLink>
        </li>
      );
    });
  }
  render() {
    let classNamesMenuLinks = "";
    if (this.props.isOpen) {
      classNamesMenuLinks = classNames(
        this.props.className,
        classes["MenuLinks"]
      );
    } else {
      classNamesMenuLinks = classNames(
        this.props.className,
        classes["MenuLinks"],
        classes["close"]
      );
    }
    return (
      <>
        <nav className={classNamesMenuLinks}>
          <MenuButtonClose onClick={this.props.onClose} />
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </>
    );
  }
}
