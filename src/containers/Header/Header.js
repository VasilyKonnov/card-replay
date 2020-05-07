import React, { Component } from "react";
import classes from "./Header.module.css";
import "./Transition-style.css";
import classNames from "classnames";

import Logo from "../../components/UI/Logo/Logo";
import { Button } from "@material-ui/core";
import { Transition } from "react-transition-group";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import Search from "../../components/UI/Search/Search";
import AuthDialog from "../../Dialogs/Auth/Auth";
import RegistrationDialog from "../../Dialogs/Registration/Registration";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

// import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
// import MenuLinks from "../../components/Navigation/MenuLinks/MenuLinks";
// import Drawer from "../../components/Navigation/Drawer/Drawer";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openAuth: false,
      openRegistration: false,
      openSearch: false,
      transitionSearch: false,
      openTriggerSearch: true,
    };
  }
  handlerOpenAuth = () => {
    console.log("Click on Add Button");
    this.setState({
      openAuth: true,
    });
  };
  handlerCloseAuth = () => {
    this.setState({
      openAuth: false,
    });
  };
  handlerOpenRegistration = () => {
    this.setState({
      openRegistration: true,
    });
  };
  handlerCloseRegistration = () => {
    this.setState({
      openRegistration: false,
    });
  };
  handlerOpenHeaderSearch = () => {
    this.setState({
      openTriggerSearch: false,
      openSearch: true,
    });
  };

  handlerCloseHeaderSearch = () => {
    if (this.state.openSearch) {
      this.setState({
        openSearch: false,
        openTriggerSearch: true,
      });
    }
  };

  render() {
    const HeaderClassNames = classNames(
      this.props.className,
      classes["Header"]
    );
    return (
      <>
        <header className={HeaderClassNames} onClick={this.props.onClick}>
          <div className={classes["Header-container"]}>
            <div className={classes["Header-logo"]}>
              <Logo />
            </div>
            <div className={classes["menuButtons"]}>
              <Transition
                in={this.state.openSearch}
                timeout={300}
                unmountOnExit
                mountOnEnter
              >
                {(state) => (
                  <ClickAwayListener
                    onClickAway={this.handlerCloseHeaderSearch}
                  >
                    <div className={`searchWrapper ${state}`}>
                      <Search className={classes["Search"]} />
                    </div>
                  </ClickAwayListener>
                )}
              </Transition>
              <Transition
                in={this.state.openTriggerSearch}
                timeout={0}
                mountOnEnter
                unmountOnExit
              >
                {(state) => (
                  <div className={`openTrigger ${state}`}>
                    <Button
                      className={classes["searchButton"]}
                      startIcon={<SearchIcon />}
                      onClick={this.handlerOpenHeaderSearch}
                    >
                      Поиск
                    </Button>
                    <Button
                      className={classes["create"]}
                      startIcon={<AddIcon />}
                    >
                      Создать
                    </Button>
                  </div>
                )}
              </Transition>

              <div className={classes["authContainer"]}>
                <Button
                  className={classes["login"]}
                  startIcon={<ExitToAppIcon />}
                  onClick={this.handlerOpenAuth}
                >
                  Вход
                </Button>
                <Button
                  className={classes["green"]}
                  onClick={this.handlerOpenRegistration}
                >
                  Регистрация
                </Button>
              </div>
            </div>
          </div>
        </header>
        <AuthDialog
          open={this.state.openAuth}
          onClose={this.handlerCloseAuth}
        />
        <RegistrationDialog
          open={this.state.openRegistration}
          onClose={this.handlerCloseRegistration}
        />
      </>
    );
  }
}
