import React, { Component } from "react";
import classes from "./HeaderProfile.module.css";
import "../Header/Transition-style.css";
import classNames from "classnames";

import Logo from "../../components/UI/Logo/Logo";
import { Button } from "@material-ui/core";
import { Transition } from "react-transition-group";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import Search from "../../components/UI/Search/Search";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";

import Avatar from "../../components/UI/Avatar/Avatar";
import Notification from "../../components/UI/Notifications/Notifications";

import Fade from "@material-ui/core/Fade";

// import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
// import MenuLinks from "../../components/Navigation/MenuLinks/MenuLinks";
// import Drawer from "../../components/Navigation/Drawer/Drawer";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSearch: false,
      transitionSearch: false,
      openTriggerSearch: true,
      isNotificationOpen: false,
      isMenuOpen: false,
      isPopperElement: null,
    };
  }
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

              <div className={classes["Profile-block"]}>
                <Notification
                  aria-describedby={"id"}
                  onAdd={(PopperElement) => {
                    this.setState({ PopperElement, isNotificationOpen: true });
                  }}
                />
                <ClickAwayListener
                  onClickAway={() =>
                    this.setState({ isNotificationOpen: false })
                  }
                >
                  <Popper
                    className={classes["NotificationPopover"]}
                    open={this.state.isNotificationOpen}
                    // open={true}
                    anchorEl={this.state.PopperElement}
                    anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
                    transformOrigin={{ horizontal: "center", vertical: "top" }}
                    onClose={() => this.setState({ isNotificationOpen: false })}
                    elevation={3}
                    id={"id"}
                  >
                    {({ TransitionProps }) => {
                      return (
                        <Fade
                          in={this.state.isNotificationOpen}
                          {...TransitionProps}
                        >
                          <Paper elevation={3}>
                            <h4>Popper</h4>
                          </Paper>
                        </Fade>
                      );
                    }}
                  </Popper>
                </ClickAwayListener>
                <Avatar />
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
