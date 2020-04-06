import React from "react";
import classes from "./Avatar.module.css";
import classNames from "classnames";
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Avatar = props => {
const AvatarClassNames = classNames(props.className, classes["Avatar"]);
   return(
    <IconButton className={AvatarClassNames} aria-label="show 17 new notifications" color="inherit">
        <Avatar/>
        <ArrowDropDownIcon/>
    </IconButton>
   )
   
   
//    <div className={AvatarClassNames} onClick={props.onClick} />;
};

export default Avatar;