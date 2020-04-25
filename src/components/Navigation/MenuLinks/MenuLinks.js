import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MenuLinks.module.css";
import classNames from "classnames";
// import Backdrop from "../../UI/Backdrop/Backdrop";
const Links = [
  { to: "/", label: "Вход", exact: true },
  { to: "/register", label: "Регистрация", exact: false },
  // { to: "/about", label: "О сервисе", exact: false },
  // { to: "/tarifs", label: "Тарифы", exact: false }
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
            onClick={this.props.onClick}
          >
            {Link.label}
          </NavLink>
        </li>
      );
    });
  }
  render() {
    let classNamesMenuLinks = classNames(
      this.props.className,
      classes["MenuLinks"]
    );
    return (
      <nav className={classNamesMenuLinks}>
        <ul>{this.renderLinks()}</ul>
        {this.props.children}
      </nav>
    );
  }
}
