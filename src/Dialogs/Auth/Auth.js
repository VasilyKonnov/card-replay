import React from "react";
import classes from "./Auth.module.css";
import classNames from "classnames";
import Dialog from "../../components/UI/CustomDialog/CustomDialog";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "../../components/UI/Button/Button";
import AuthForm from "../../containers/Auth/Auth";

import iconVk from "../../assets/img/icon/vk-icon.png";
import iconFb from "../../assets/img/icon/fb-icon.png";
import iconYa from "../../assets/img/icon/ya-icon.png";
import iconGl from "../../assets/img/icon/google-icon.png";
import iconOk from "../../assets/img/icon/ok-icon.png";
import iconTw from "../../assets/img/icon/tw-icon.png";

const Auth = (props) => {
  const AuthClassNames = classNames(props.className, classes["Auth"]);
  return (
    <Dialog
      className={AuthClassNames}
      open={props.open}
      onClick={props.onClick}
      scroll={"body"}
      onClose={props.onClose}
    >
      <div className={classes["headerDialog"]}>
        <IconButton onClick={props.onClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className={classes["bodyDialog"]}>
        <h2>Авторизация через аккаунт:</h2>
        <div className={classes["socialIcons"]}>
          <Button>
            <img src={iconGl} />
          </Button>
          <Button>
            <img src={iconYa} />
          </Button>
          <Button>
            <img src={iconVk} />
          </Button>
          <Button>
            <img src={iconFb} />
          </Button>
          <Button>
            <img src={iconTw} />
          </Button>
          <Button>
            <img src={iconOk} />
          </Button>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <h3>Или стандартная</h3>
        <h2>Авторизация через Email</h2>
        <AuthForm />
      </div>
    </Dialog>
  );
};

export default Auth;
