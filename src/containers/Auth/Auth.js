import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import CustomInput from "../../components/UI/CustomInput/CustomInput";
import Button from "../../components/UI/Button/Button";
import classes from "./Auth.module.css";
import classNames from "classnames";

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default class Auth extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: "",
        type: "email",
        label: "Email",
        errorMessage: "Введите корректный Email",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: "",
        type: "password",
        label: "Пароль",
        errorMessage: "Пароль не меньше 6 символов",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  };
  subminHandler = event => {
    event.preventDefault();
  };

  loginHandler = async () => {
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true
    };
    try {
      // const response = await axios.post(
      //   "",
      //   authData
      // );
      console.log("Сработал Логин");
    } catch (e) {
      console.log(e);
    }
  };
  validateControl(value, validation) {
    if (!validation) {
      return true;
    }
    let isValid = true;
    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (validation.email) {
      isValid = validateEmail(value) && isValid;
    }
    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }
    return isValid;
  }
  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };
    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);
    formControls[controlName] = control;
    let isFormValid = true;
    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid;
    });
    this.setState({ formControls, isFormValid });
  };
  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <CustomInput
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      );
    });
  }
  render() {
    const AuthclassNames = classNames(
      classes["AuthForm"],
      this.props.className
    );
    console.log(classes["button"]);
    return (
      <form onSubmit={this.subminHandler} className={AuthclassNames}>
        {this.renderInputs()}
        <NavLink
          className={classes["restore-password"]}
          to="/restore-password"
          exact={true}
        >
          Забыли пароль?
        </NavLink>
        <Button
          className={classes["button"]}
          onClick={this.loginHandler}
          disabled={!this.state.isFormValid}
        >
          Войти
        </Button>
      </form>
    );
  }
}
