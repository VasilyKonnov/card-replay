import React, { Component } from "react";
import classes from "./Layout.module.css";
import Header from "../../containers/Header/Header";
import HeaderProfile from "../../containers/HeaderProfile/HeaderProfile";
import Footer from "../../containers/Footer/Footer";

class Layout extends Component {
  state = {
    menu: false,
  };

  toggleMenuHandler = () => {
    console.log("click on button");
    this.setState({
      menu: !this.state.menu,
    });
  };

  menuCloseHendler = () => {
    this.setState({
      menu: false,
    });
  };

  render() {
    return (
      <>
        {/* <Header
          isOpen={this.state.menu}
          onClose={this.menuCloseHendler}
          onToggle={this.toggleMenuHandler}
        /> */}
        <HeaderProfile />
        <div className={classes["Layout"]}>{this.props.children}</div>
        <Footer />
      </>
    );
  }
}

export default Layout;
