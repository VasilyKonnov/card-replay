import React from "react";
// import { NavLink } from "react-router-dom";
import classes from "./LoginPage.module.css";
// import MainContainer from "../../containers/MainContainer/MainContainer";
import Container from "../../containers/Container/Container";
import Grid from "@material-ui/core/Grid";
// import Auth from "../../containers/Auth/Auth";

const LoginPage = (props) => {
  return (
    // <MainContainer>
    <Container>
      <Grid container spacing={3}>
        <Grid item md={7} xs={12} className={classes["hello-text"]}></Grid>
        <Grid item md={5} xs={12}></Grid>
      </Grid>
    </Container>
    // </MainContainer>
  );
};

export default LoginPage;
