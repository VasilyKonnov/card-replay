import React from "react";
import classes from "./TarifPage.module.css";
import classNames from "classnames";
import MainContainer from "../../containers/MainContainer/MainContainer";
import Container from "../../containers/Container/Container";
import Grid from "@material-ui/core/Grid";
import Card from "../../containers/Card/Card";
import Button from "../../components/UI/Button/Button";

const TarifPage = props => {
  const TarifPageClassNames = classNames(props.className, classes["TarifPage"]);
  return (
    <MainContainer>
      <Container>
        <h1 className={classes["h1"]}>Тарифы</h1>
        <Grid container spacing={3}>
          <Grid item md={3} sm={6} xs={12}>
            <Card>
              <p className={classes["tarif-time"]}>30 дней</p>
              <p className={classes["price"]}>Цена: ? рублей</p>
              <Button className={classes["button"]}>Активировать</Button>
            </Card>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Card>
              <p className={classes["tarif-time"]}>90 дней</p>
              <p className={classes["price"]}>Цена: ? рублей</p>
              <Button className={classes["button"]}>Активировать</Button>
            </Card>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Card>
              <p className={classes["tarif-time"]}>180 дней</p>
              <p className={classes["price"]}>Цена: ? рублей</p>
              <Button className={classes["button"]}>Активировать</Button>
            </Card>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Card>
              <p className={classes["tarif-time"]}>365 дней</p>
              <p className={classes["price"]}>Цена: ? рублей</p>
              <Button className={classes["button"]}>Активировать</Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </MainContainer>
  );
};

export default TarifPage;
