import React from "react";
import classes from "./Theory.module.css";
import classNames from "classnames";
import AddButton from "../../components/UI/AddButton/AddButton";
import MainContiner from "../../containers/MainContainer/MainContainer";
import Container from "../../containers/Container/Container";

import List from "@material-ui/core/List";
import CustomListItem from "../../components/UI/CustomListItem/CustomListItem";

const Theory = props => {
  const TheoryClassNames = classNames(props.className, classes["Theory"]);
  const clickHandler = () => {
    console.log("Click on Add Button");
  };
  return (
    <MainContiner>
      <Container>
        <div className={TheoryClassNames}>
          <h6>Сортировать</h6>
          <hr />
          <List>
            <CustomListItem
              sectionName="React Native"
              date="Раздел создан 23.01.2020"
              sizeSection="24 §"
            />
            <CustomListItem
              sectionName="Angular 8+"
              date="Раздел создан 23.01.2020"
              sizeSection="990 §"
            />
            <CustomListItem
              sectionName="Node.js Node.js Node.js Node.js Node.js Node.js Node.js Node.js Node.js Node.js  "
              date="Раздел создан 23.01.2020"
              sizeSection="990 §"
            />
            <CustomListItem
              sectionName="React Native"
              date="Раздел создан 23.01.2020"
              sizeSection="575 §"
            />
            <CustomListItem
              sectionName="Angular 8+"
              date="Раздел создан 23.01.2020"
              sizeSection="24 §"
            />
            <CustomListItem
              sectionName="Node.js Супер раздел буду учить его с удовольствием"
              date="Раздел создан 23.01.2020"
              sizeSection="12 §"
            />
            <CustomListItem
              sectionName="React Native"
              date="Раздел создан 23.01.2020"
              sizeSection="74 §"
            />
            <CustomListItem
              sectionName="Angular 8+"
              date="Раздел создан 23.01.2020"
              sizeSection="24 §"
            />
            <CustomListItem
              sectionName="Node.js Супер раздел буду учить его с удовольствием"
              date="Раздел создан 23.01.2020"
              sizeSection="24 §"
            />
          </List>
          <AddButton onClick={clickHandler} buttonText="Добавить Раздел" />
        </div>
      </Container>
    </MainContiner>
  );
};

export default Theory;
