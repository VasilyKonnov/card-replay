import React from "react";
import classes from "./Registration.module.css";
import classNames from "classnames";
import Dialog from "../../components/UI/CustomDialog/CustomDialog";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "../../components/UI/Button/Button";
import RegistrationForm from "../../containers/Registration/Registration";

import iconVk from "../../assets/img/icon/vk-icon.png";
import iconFb from "../../assets/img/icon/fb-icon.png";
import iconYa from "../../assets/img/icon/ya-icon.png";
import iconGl from "../../assets/img/icon/google-icon.png";
import iconOk from "../../assets/img/icon/ok-icon.png";
import iconTw from "../../assets/img/icon/tw-icon.png";

const Registration = (props) => {
  const RegistrationClassNames = classNames(
    props.className,
    classes["Registration"]
  );
  return (
    <Dialog
      className={RegistrationClassNames}
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
        <h2>Регистрация через аккаунт:</h2>
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
        <h3>Или стандартная</h3>
        <h2>Регистрация через Email</h2>
        <RegistrationForm />
      </div>
    </Dialog>
  );
};

export default Registration;
