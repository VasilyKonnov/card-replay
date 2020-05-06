import React from "react";
import classes from "./Search.module.css";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import classNames from "classnames";
import InputBase from "@material-ui/core/InputBase";

const Search = (props) => {
  const SearchClassNames = classNames(props.className, classes["Search"]);
  return (
    <form className={SearchClassNames} onClick={props.onClick}>
      <InputBase
        className={classes.input}
        placeholder="Введите поиск"
        autoFocus={true}
      />
      <Button
        className={classes["Button"]}
        startIcon={<SearchIcon />}
        type="submit"
      >
        Поиск
      </Button>
    </form>
  );
};

export default Search;
