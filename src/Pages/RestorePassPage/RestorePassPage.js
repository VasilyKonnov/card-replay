import React from "react";
import RestorePass from "../../containers/RestorePass/RestorePass";
import classes from "../../Pages/RestorePassPage/RestorePassPage.module.css";
import Card from "../../containers/Card/Card";
import classNames from "classnames";

const RestorePassPage = props => {
  let RestorePassPageClassNames = classNames(
    classes[props.className],
    classes["RestorePassPage"]
  );
  return (
    <Card className={RestorePassPageClassNames}>
      <h1 className={classes["text-align-center"]}>
        Восстановить или изменить пароль
      </h1>
      <RestorePass />
    </Card>
  );
};

export default RestorePassPage;
