import React from "react";
import classes from "./Notifications.module.css";
import classNames from "classnames";
import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Notifications = props => {
const NotificationsClassNames = classNames(props.className, classes["Notifications"]);
   return (   
    <IconButton className={NotificationsClassNames} color="inherit">
            <NotificationsIcon className={classes["NotificationsIcon"]} />
            {props.BadgeContent ? <span className={classes["Badge"]}>{props.BadgeContent}</span> : ""}            
    </IconButton>
   )
};

export default Notifications;