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
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  //   hide: false,
  // },
  // slidesPerView: 1,
  // loop: true,
  spaceBetween: 30,
  mousewheel: true,
  // lazy: true,
  centeredSlides: true,
  effect: "fade",
  // autoplay: {
  // delay: 3000,
  // speed: {
  //   easeInOut: "cubic-bezier(1.4, 0, 1.2, 2)",
  // },
  // disableOnInteraction: false,
  // },
};
console.log(paramsSwiper.effect);
const LoginPage = (props) => {
  return (
    // <MainContainer>
    <Container>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12} className={classes["hello-text"]}>
          <div style={{ marginTop: "150px" }}>
            <h2>
              Легко изучай любой предмет! <br />
              Шаг за шагом достигай лучших результатов!
            </h2>
            {/* <h2>Мы поможем с этим!</h2> */}
            <Button>Начать</Button>
          </div>
        </Grid>
        <Grid item md={8} xs={12}>
          {/* <div style={{ height: "600px" }}> */}
          <Swiper {...paramsSwiper}>
            <div style={{ height: "600px" }}>
              <img src={Slide2} style={{ height: "100%" }} />
            </div>
            <div style={{ height: "600px" }}>
              <img src={Slide1} style={{ height: "100%" }} />
            </div>
            <div style={{ height: "600px" }}>
              <img src={Slide4} style={{ height: "100%" }} />
            </div>
            <div style={{ height: "600px" }}>
              <img src={Slide3} style={{ height: "100%" }} />
            </div>
          </Swiper>
          {/* </div> */}
        </Grid>
      </Grid>
    </Container>
    //{" "}
    // </MainContainer>
  );
};

export default LoginPage;
