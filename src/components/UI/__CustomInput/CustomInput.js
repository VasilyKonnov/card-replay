import React from "react";
import classes from "./CustomInput.module.css";
import classNames from "classnames";

// import Button from "@material-ui/core/Button";
import { InputAdornment, TextField } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PersonIcon from "@material-ui/icons/Person";

const CustomInput = props => {
  const CustomInputClassNames = classNames(
    props.className,
    classes["CustomInput"]
  );
  return (
    <div className={CustomInputClassNames} onClick={props.onClick}>
      <TextField
        label="Имя..."
        id="standard-start-adornment"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PersonIcon />
            </InputAdornment>
          )
        }}
      />
      <br />
      <TextField
        label="Email..."
        id="standard-start-adornment"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <EmailIcon />
            </InputAdornment>
          )
        }}
      />
      <br />
      <TextField
        label="Пароль..."
        type="password"
        id="standard-start-adornment"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <LockOutlinedIcon />
            </InputAdornment>
          )
        }}
      />
    </div>
  );
};

export default CustomInput;
