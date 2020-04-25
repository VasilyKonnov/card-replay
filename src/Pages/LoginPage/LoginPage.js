import React from "react";
// import { NavLink } from "react-router-dom";
// import classes from "./LoginPage.module.css";
// import MainContainer from "../../containers/MainContainer/MainContainer";
import Container from "../../containers/Container/Container";
import Grid from "@material-ui/core/Grid";
// import Auth from "../../containers/Auth/Auth";

const LoginPage = (props) => {
  return (
    // <MainContainer>
    <Container>
      <Grid container spacing={6}>
        {/* <Grid item md={7} xs={12} className={classes["hello-text"]}>
          <h1>Добро пожаловать!</h1>
          <h3>
            Авторизуйтесь и начинайте повторять подготовленный материал или
            создавать новый.
          </h3>
          <p>
            <NavLink className={classes["link"]} to="/register" exact={true}>
              Страница регистрации здесь
            </NavLink>
          </p>
        </Grid>
        <Grid item md={5} xs={12}> */}
        {/* <h2 style={{ textAlign: "center" }}>Вход</h2>
          <Auth className={classes["form"]} />
        </Grid> */}
      </Grid>
    </Container>
    // </MainContainer>
  );
};

export default LoginPage;
