import React from "react";
import classes from "./Avatar.module.css";
import classNames from "classnames";
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AvatarImg from "../../../assets/img/avatar.jpg"

const Avatars = props => {
const AvatarClassNames = classNames(props.className, classes["Avatar"]);
   return(  
    <Button className={AvatarClassNames} color="inherit">
        <span className={classes["UserName"]}>Василий Коннов</span>
        <Avatar src={AvatarImg}/>
        <ArrowDropDownIcon  className={classes["ArrayDown"]} />
    </Button>
   )
   
   
//    <div className={AvatarClassNames} onClick={props.onClick} />;
};

export default Avatars;