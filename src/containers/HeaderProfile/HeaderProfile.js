import React, { Component }  from "react";
import classes from "./HeaderProfile.module.css";
import classNames from "classnames";
import Logo from "../../components/UI/Logo/Logo";
import Avatar from "../../components/UI/Avatar/Avatar";
import Notification from "../../components/UI/Notifications/Notifications";
import Popover from '@material-ui/core/Popover';


export default class HeaderProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopoverOpen: false,
      popoverElement: null
    };
  }

render() {
  
const HeaderClassNames = classNames(this.props.className, classes["Header"]);

console.log(this.state.isPopoverOpen, this.state.popoverElement);

return (
  <header className={HeaderClassNames} onClick={this.props.onClick}>
    <div className={classes["Header-container"]}>
      <div className={classes["Header-logo"]}>
        <Logo />
      </div>

      <div className={classes["Profile-block"]}>
        <Notification onAdd = {(popoverElement) => {this.setState({popoverElement, isPopoverOpen: true})} } />
        <Popover
          className={classes["NotificationPopover"]}
          open = {this.state.isPopoverOpen}
          anchorEl = {this.state.popoverElement}
          anchorOrigin = {{horizontal: "center", vertical: "bottom"}}
          transformOrigin = {{horizontal: "center", vertical: "top"}}
          onClose = {() => this.setState({isPopoverOpen: false})} 
          elevation={3}
        >
          <h4>Popover</h4>
        </Popover>

        <Avatar/>
      </div>

    </div>
    {this.props.children}
  </header>
)
}
}
