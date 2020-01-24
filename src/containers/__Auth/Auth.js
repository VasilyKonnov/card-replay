import React, { Component } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/Button/Button";
import CustomInput from "../../components/UI/Input/CustomInput";
// import axios from "axios";

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default class Auth extends Component {
  state = {
    isFormValid: false,
    formControls: {
      text: {
        value: "",
        type: "text",
        label: "",
        errorMessage: "Поле обязательно для заполнения",
        valid: false,
        touched: false,
        validation: {
          required: true
        }
      },
      name: {
        value: "",
        type: "name",
        label: "Имя",
        errorMessage: "Поле обязательно для заполнения",
        valid: false,
        touched: false,
        validation: {
          required: true
        }
      },
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
        errorMessage: "Введите правильный пароль",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
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
  registerHandler = async () => {
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true
    };
    try {
      // const response = await axios.post(
      //   "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCu_1HV-czSaBdYrlpW3iiWksMVHEUzXvs",
      //   authData
      // );
      console.log("Сработал регистратор");
    } catch (e) {
      console.log(e);
    }
  };
  subminHandler = event => {
    event.preventDefault();
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
    return (
      <div className={classes["Auth"]}>
        <div>
          <h1>Auth</h1>
          <form onSubmit={this.subminHandler} className={classes["AuthForm"]}>
            {this.renderInputs()}
            <Button
              className="success"
              onClick={this.loginHandler}
              disabled={!this.state.isFormValid}
            >
              Войти
            </Button>
            <Button
              className="primary"
              onClick={this.registerHandler}
              disabled={!this.state.isFormValid}
            >
              Регистрация
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
