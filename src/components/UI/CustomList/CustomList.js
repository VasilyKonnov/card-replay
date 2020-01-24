import React from "react";
import classes from "./CustomList.module.css";
import classNames from "classnames";
import CustomItem from "./__Item/Item";

const CustomList = props => {
  const CustomListClassNames = classNames(
    props.className,
    classes["CustomList"]
  );

  const listItems = props.listItems;
  const renderListItem = listItems => {
    return listItems.map((listItem, index) => {
      return (
        <CustomItem
          key={index}
          sectionName={listItem.sectionName}
          sizeSection={listItem.sizeSection}
          date={listItem.date}
          link={"/" + index + 1}
          onClick={props.onClick}
        />
      );
    });
  };

  return (
    <ul className={CustomListClassNames}>
      {renderListItem(listItems) ? (
        renderListItem(listItems)
      ) : (
        <h3>Список пуст, начте его создавать ;)</h3>
      )}
    </ul>
  );
};

export default CustomList;
