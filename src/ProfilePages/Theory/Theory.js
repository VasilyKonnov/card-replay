import React, { Component } from "react";
import classes from "./Theory.module.css";
import classNames from "classnames";
import AddButton from "../../components/UI/AddButton/AddButton";
import MainContiner from "../../containers/MainContainer/MainContainer";
import Container from "../../containers/Container/Container";
import SortList from "../../components/UI/SortList/SortList";
// import Button from "../../components/UI/Button/Button";
// import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import CustomList from "../../components/UI/CustomList/CustomList";
import AddParDialog from "../../components/UI/AddParDialog/AddParDialog";

export default class Theory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      listItems: [
        {
          id: 1,
          sectionName: "React Native",
          date: "Раздел создан 23.01.2020",
          sizeSection: "24 §",
        },
        {
          id: 2,
          sectionName: "Раздел создан Раздел создан Angular 8+",
          date: "Раздел создан 23.01.2020",
          sizeSection: "24 §",
        },
        {
          id: 3,
          sectionName: "Node.js",
          date: "Раздел создан 23.01.2020",
          sizeSection: "24 §",
        },
        {
          id: 4,
          sectionName: "React Native",
          date: "Раздел создан 23.01.2020",
          sizeSection: "24 §",
        },
        {
          id: 5,
          sectionName: "Angular 8+",
          date: "Раздел создан 23.01.2020",
          sizeSection: "24 §",
        },
        {
          id: 6,
          sectionName: "Раздел создан Node.js ",
          date: "Раздел создан 23.01.2020",
          sizeSection: "24 §",
        },
      ],
    };
  }
  editListItem = () => {
    console.log("Был клик по кнопке редактировать");
  };
  handlerOpen = () => {
    console.log("Click on Add Button");
    this.setState({
      open: true,
    });
  };
  handlerClose = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    const TheoryClassNames = classNames(
      this.props.className,
      classes["Theory"]
    );
    return (
      <MainContiner>
        <Container>
          <div className={TheoryClassNames}>
            <h2>Список предметов</h2>
            <SortList />
            <CustomList
              listItems={this.state.listItems}
              onClick={this.editListItem}
            />
            <AddButton
              onClick={this.handlerOpen}
              buttonText="Добавить Раздел"
            />
          </div>
        </Container>
        <AddParDialog open={this.state.open} onClose={this.handlerClose} />
      </MainContiner>
    );
  }
}
