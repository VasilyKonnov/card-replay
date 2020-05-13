import React from "react";
import classes from "./Notifications.module.css";
import classNames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Notifications = (props) => {
  const NotificationsClassNames = classNames(
    props.className,
    classes["Notifications"]
  );
  console.log(props.onAdd);
  return (
    <IconButton
      className={NotificationsClassNames}
      onClick={(event) => props.onAdd(event.currentTarget)}
    >
      <NotificationsIcon className={classes["NotificationsIcon"]} />
      {props.BadgeContent ? (
        <span className={classes["Badge"]}>{props.BadgeContent}</span>
      ) : (
        ""
      )}
    </IconButton>
  );
};

export default Notifications;
