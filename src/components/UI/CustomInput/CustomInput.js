import React from "react";
import classes from "./CustomInput.module.css";
import classNames from "classnames";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PersonIcon from "@material-ui/icons/Person";
import StyledInput from "./StyledInput/StyledInput";

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched;
}

const CustomInput = props => {
  const InputType = props.type || "text";
  const InputClassNames = classNames(
    classes[props.className],
    classes["Input"],
    isInvalid(props) ? classes["ivalid"] : null
  );

  if (InputType === "text") {
    return (
      <StyledInput
        autoFocus={props.autoFocus}
        required={props.required}
        error={isInvalid(props)}
        helperText={isInvalid(props) ? props.errorMessage : null}
        label={props.label}
        className={InputClassNames}
        type="text"
        value={props.value}
        onChange={props.onChange}
      />
    );
  }
  if (InputType === "name") {
    return (
      <StyledInput
        error={isInvalid(props)}
        helperText={isInvalid(props) ? props.errorMessage : null}
        label={props.label}
        className={InputClassNames}
        type="text"
        value={props.value}
        onChange={props.onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PersonIcon className={classes["icon-color"]} />
            </InputAdornment>
          )
        }}
      />
    );
  }
  if (InputType === "email") {
    return (
      <StyledInput
        error={isInvalid(props)}
        helperText={isInvalid(props) ? props.errorMessage : null}
        label={props.label}
        className={InputClassNames}
        type="email"
        value={props.value}
        onChange={props.onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <EmailIcon className={classes["icon-color"]} />
            </InputAdornment>
          )
        }}
      />
    );
  }

  if (InputType === "password") {
    return (
      <StyledInput
        error={isInvalid(props)}
        helperText={isInvalid(props) ? props.errorMessage : null}
        label={props.label}
        className={InputClassNames}
        type="password"
        value={props.value}
        onChange={props.onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <LockOutlinedIcon className={classes["icon-color"]} />
            </InputAdornment>
          )
        }}
      />
    );
  }
};

export default CustomInput;
