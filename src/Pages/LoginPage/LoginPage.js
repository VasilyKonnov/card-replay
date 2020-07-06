import React from "react";
import classes from "./LoginPage.module.css";
import Container from "../../containers/Container/Container";
import Grid from "@material-ui/core/Grid";
import Button from "../../components/UI/Button/Button";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import Slide1 from "../../assets/img/1.png";
import Slide2 from "../../assets/img/2.png";
import Slide3 from "../../assets/img/3.png";
import Slide4 from "../../assets/img/4.png";
import GooglePlay from "../../assets/googleplay.png";
import AppStore from "../../assets/apple.png";
import { NavLink } from "react-router-dom";

const paramsSwiper = {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  lazy: true,
  centeredSlides: true,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
};
console.log(paramsSwiper.effect);
const LoginPage = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Grid className={classes["firstScreen"]} container spacing={3}>
          <Grid item md={4} xs={12} className={classes["hello-text"]}>
            <div>
              <h1 className={classes["firstH1"]}>Изучая любой предмет </h1>
              <h2 className={classes["firstH2"]}>
                Шаг за шагом
                <br /> достигай лучших результатов!
              </h2>
              <Button className={classes["startButton"]}>Начать</Button>
            </div>
          </Grid>
          <Grid item md={8} xs={12} className={classes["firstSlider"]}>
            <Swiper {...paramsSwiper}>
              <div className={classes["wrapImg"]}>
                <img src={Slide2} style={{ width: "100%" }} />
              </div>
              <div className={classes["wrapImg"]}>
                <img src={Slide3} style={{ width: "100%" }} />
              </div>
              <div className={classes["wrapImg"]}>
                <img src={Slide4} style={{ width: "100%" }} />
              </div>
              <div className={classes["wrapImg"]}>
                <img src={Slide1} style={{ width: "100%" }} />
              </div>
            </Swiper>
          </Grid>
        </Grid>
      </Container>

      <div className={classes["fullWidth"]}>
        <h2
          style={{
            maxWidth: "1100px",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          Запоминание информации на карточках успешно используется почти во всем
          мире и мы реализуем удобный сервис с учетом лучших практик на сегодня!
        </h2>
      </div>

      <Container>
        <Grid container className={classes["infoBlock"]}>
          <Grid item md={6} xs={12} className={classes["blockText"]}>
            <h3>
              Каждый, даже не большой, освоенный материал ощущается как победа,
              и это мативирует продолжать трудится на своими знаниями.
            </h3>
          </Grid>

          <Grid item md={6} xs={12} className={classes["blockImg"]}>
            Тут img
          </Grid>
        </Grid>

        <Grid container className={classes["infoBlock"]}>
          <Grid item md={6} xs={12} className={classes["blockImg"]}>
            Тут img
          </Grid>
          <Grid item md={6} xs={12} className={classes["blockText"]}>
            <h3>
              По картачкам для запоминания можно учить любой материал
              Иностранные слова, понятия, определения, формулы и т.д.
            </h3>
          </Grid>
        </Grid>

        <Grid container className={classes["infoBlock"]}>
          <Grid item md={6} xs={12} className={classes["blockText"]}>
            <h3>
              Ваши новые достижения всегда рядом, каждый освоенный материал
              делает вас ближе к освоению выбранной вами предмета, области или
              темы изучения!
            </h3>
          </Grid>
          <Grid item md={6} xs={12} className={classes["blockImg"]}>
            Тут img
          </Grid>
        </Grid>
      </Container>

      <div className={classes["fullWidth"]}>
        <h2
          style={{
            maxWidth: "1144px",
            textAlign: "center",
            margin: "0 auto 40px",
            color: "#12243E",
          }}
        >
          Повысить свою успеваемость очень просто!
        </h2>
        <Button className={classes["startButton"]}>Начать</Button>
      </div>
      <div className={classes["fullWidthWhite"]}>
        <h2>
          Мобильные приложения находяться в разработке вы получите оповещения в
          личном кабинете когда будет возможность перейти полность в мобильное
          приложе
        </h2>
        <NavLink to={"/#"}>
          <img src={GooglePlay} />
        </NavLink>
        <NavLink to={"/#"}>
          <img src={AppStore} />
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
