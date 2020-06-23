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
// import { easing } from "@material-ui/core";

const paramsSwiper = {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  lazy: true,
  centeredSlides: true,
  effect: "fade",
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
};
console.log(paramsSwiper.effect);
const LoginPage = (props) => {
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12} className={classes["hello-text"]}>
            <div>
              <h2>
                Легко изучай любой предмет! <br />
                Шаг за шагом достигай лучших результатов!
              </h2>
              <Button>Начать</Button>
            </div>
          </Grid>
          <Grid item md={8} xs={12} style={{ height: "95vh" }}>
            <Swiper {...paramsSwiper}>
              <div style={{ height: "600px", backgroundColor: "#fff" }}>
                <img src={Slide2} style={{ width: "100%" }} />
              </div>
              <div style={{ height: "600px", backgroundColor: "#fff" }}>
                <img src={Slide1} style={{ width: "100%" }} />
              </div>
              <div style={{ height: "600px", backgroundColor: "#fff" }}>
                <img src={Slide4} style={{ width: "100%" }} />
              </div>
              <div style={{ height: "600px", backgroundColor: "#fff" }}>
                <img src={Slide3} style={{ width: "100%" }} />
              </div>
            </Swiper>
          </Grid>
        </Grid>
      </Container>

      <div style={{ width: "100%", padding: "30px 0", background: "#48AF73" }}>
        <h2
          style={{ maxWidth: "1144px", textAlign: "center", margin: "0 auto" }}
        >
          Запоминание информации на карточках давно успешно используется и мы
          реализуем удобный сервис с учетом лучших практик на сегодя
        </h2>
      </div>
    </>
  );
};

export default LoginPage;
