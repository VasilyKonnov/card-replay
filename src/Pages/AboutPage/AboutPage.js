import React from "react";
import classes from "./AboutPage.module.css";
import classNames from "classnames";
import MainContainer from "../../containers/MainContainer/MainContainer";
import Container from "../../containers/Container/Container";

const AboutPage = props => {
  const AboutPageClassNames = classNames(props.className, classes["AboutPage"]);
  return (
    <MainContainer>
      <Container>
        <h1>О сервисе</h1>
        <p>
          Повседневная практика показывает, что постоянное
          информационно-пропагандистское обеспечение нашей деятельности
          представляет собой интересный эксперимент проверки направлений
          прогрессивного развития. Повседневная практика показывает, что начало
          повседневной работы по формированию позиции играет важную роль в
          формировании новых предложений. Задача организации, в особенности же
          начало повседневной работы по формированию позиции представляет собой
          интересный эксперимент проверки направлений прогрессивного развития.
          Не следует, однако забывать, что консультация с широким активом
          позволяет оценить значение новых предложений. Повседневная практика
          показывает, что консультация с широким активом играет важную роль в
          формировании систем массового участия. Равным образом начало
          повседневной работы по формированию позиции в значительной степени
          обуславливает создание направлений прогрессивного развития.
        </p>
        <h2>Для чего он нужен?</h2>
        <p>
          Не следует, однако забывать, что постоянный количественный рост и
          сфера нашей активности требуют определения и уточнения дальнейших
          направлений развития. Товарищи! рамки и место обучения кадров
          позволяет выполнять важные задания по разработке позиций, занимаемых
          участниками в отношении поставленных задач. Разнообразный и богатый
          опыт начало повседневной работы по формированию позиции способствует
          подготовки и реализации новых предложений. Не следует, однако
          забывать, что консультация с широким активом играет важную роль в
          формировании новых предложений. Повседневная практика показывает, что
          рамки и место обучения кадров позволяет оценить значение форм
          развития. Таким образом дальнейшее развитие различных форм
          деятельности обеспечивает широкому кругу (специалистов) участие в
          формировании форм развития.
        </p>
        <h2>Как использовать?</h2>
        <p>
          Таким образом новая модель организационной деятельности способствует
          подготовки и реализации направлений прогрессивного развития.
          Значимость этих проблем настолько очевидна, что новая модель
          организационной деятельности играет важную роль в формировании
          дальнейших направлений развития. Товарищи! сложившаяся структура
          организации представляет собой интересный эксперимент проверки
          направлений прогрессивного развития
        </p>
      </Container>
    </MainContainer>
  );
};

export default AboutPage;
