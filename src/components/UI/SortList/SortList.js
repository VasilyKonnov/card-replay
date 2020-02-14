import React from "react";
import classes from "./SortList.module.css";
import classNames from "classnames";
import Button from "@material-ui/core/Button";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const SortList = props => {
  const SortListClassNames = classNames(props.className, classes["SortList"]);
  return (
    <div className={SortListClassNames} onClick={props.onClick}>
      <div className={classes["title"]}>
        <span>Сортировать</span>
      </div>
      <div className={classes["buttonWrapper"]}>
        <Button className={classes["button"]}>
          <ArrowDropUpIcon className={classes["top-array"]} />
          <span>Дата</span>
          <ArrowDropDownIcon className={classes["bottom-array"]} />
        </Button>
        <Button className={classes["button"]}>
          <ArrowDropUpIcon className={classes["top-array"]} />
          <span>Размер</span>
          <ArrowDropDownIcon className={classes["bottom-array"]} />
        </Button>
        <Button className={classes["button"]}>
          <ArrowDropUpIcon className={classes["top-array"]} />
          <span>А-Я</span>
          <ArrowDropDownIcon className={classes["bottom-array"]} />
        </Button>
      </div>
    </div>
  );
};

export default SortList;
