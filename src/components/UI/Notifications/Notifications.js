import React from "react";
import classes from "./Notifications.module.css";
import classNames from "classnames";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Notifications = props => {
const NotificationsClassNames = classNames(props.className, classes["Notifications"]);
   return (
   
    <IconButton aria-label="show 17 new notifications" color="inherit">
        <Badge badgeContent={props.bangeContent} color="secondary">
            <NotificationsIcon />
        </Badge>
    </IconButton>

//    <div className={NotificationsClassNames} onClick={props.onClick} />

   )
};

export default Notifications;