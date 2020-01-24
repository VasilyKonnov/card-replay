import React from "react";
import classes from "./Theory.module.css";
import classNames from "classnames";
import AddButton from "../../components/UI/AddButton/AddButton";
import MainContiner from "../../containers/MainContainer/MainContainer";
import Container from "../../containers/Container/Container";

import CustomList from "../../components/UI/CustomList/CustomList";

const Theory = props => {
  const TheoryClassNames = classNames(props.className, classes["Theory"]);
  const clickHandler = () => {
    console.log("Click on Add Button");
  };
  const listItems = [
    {
      sectionName: "React Native",
      date: "Раздел создан 23.01.2020",
      sizeSection: "24 §"
    },
    {
      sectionName: "Angular 8+",
      date: "Раздел создан 23.01.2020",
      sizeSection: "24 §"
    },
    {
      sectionName:
        "Node.js Node.js Node.js Node.js Node.js Node.js Node.js Node.js Node.js Node.js ",
      date: "Раздел создан 23.01.2020",
      sizeSection: "24 §"
    },
    {
      sectionName: "React Native",
      date: "Раздел создан 23.01.2020",
      sizeSection: "24 §"
    },
    {
      sectionName: "Angular 8+",
      date: "Раздел создан 23.01.2020",
      sizeSection: "24 §"
    },
    {
      sectionName:
        "Node.js Node.js Node.js Node.js Node.js Node.js Node.js Node.js Node.js Node.js ",
      date: "Раздел создан 23.01.2020",
      sizeSection: "24 §"
    }
  ];
  const editListItem = () => {
    console.log("Был клик по кнопке редактировать");
  };

  return (
    <MainContiner>
      <Container>
        <div className={TheoryClassNames}>
          <h6>Сортировать</h6>
          <hr />
          <CustomList listItems={listItems} onClick={editListItem} />
          <AddButton onClick={clickHandler} buttonText="Добавить Раздел" />
        </div>
      </Container>
    </MainContiner>
  );
};

export default Theory;
