import React from "react";
import Registration from "../../containers/Registration/Registration";
import classes from "../../Pages/RegisterPage/RegisterPage.module.css";
import Card from "../../containers/Card/Card";
import classNames from "classnames";

const RegisterPage = props => {
  let RegisterPageClassNames = classNames(
    classes[props.className],
    classes["RegisterPage"]
  );
  return (
    <Card className={RegisterPageClassNames}>
      <h1 className={classes["text-align-center"]}>Регистрация</h1>
      <Registration />
    </Card>
  );
};

export default RegisterPage;
