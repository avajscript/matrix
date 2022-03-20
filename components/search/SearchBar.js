import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import Data from "../../Data/Articles";
import SearchLine from "./SearchLine";
import Article from "./Article";
import { nanoid } from "nanoid";
const SearchbarForm = styled.form`
  border: 1px solid rgba(255, 255, 255, 0.38);
  background-color: ${(props) => props.colors.blackA};
  width: 400px;
  min-height: 40px;
  max-height: 380px;
  border-radius: 0.5rem;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 10px 3px rgba(1, 1, 1, 1);
  }
`;

const SearchBarInput = styled.input`
  padding-left: 5px;
  background-color: ${(props) => props.colors.blackA};
  width: 80%;
  height: 100%;
  color: white;
  font-size: 1rem;
  outline: none;
  border: none;
`;

const ActualSearch = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
`;

const SearchIconHolder = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SearchBar(props) {
  const [focus, setFocus] = React.useState(false);
  const [dataElems, setDataElems] = React.useState(
    Data.map((item) => {
      return (
        <SearchLine
          key={nanoid()}
          title={item.title}
          updateText={props.updateText}
          loseFocus={loseFocusSearch}
          clickQuery={props.clickQuery}
          colors={props.colors}
        />
      );
    })
  );

  function focusSearch() {
    setFocus(true);
  }
  function loseFocusSearch() {
    setTimeout(() => {
      setFocus(false);
    }, 75);
  }

  function filterSearch(e) {
    props.updateText(e);
    const text = e.currentTarget.value;

    const newData = Data.filter((article) => {
      if (text === "") {
        return true;
      } else if (article.title.toLowerCase().includes(text.toLowerCase())) {
        return true;
      }
    }).map((article) => {
      return (
        <SearchLine
          key={nanoid()}
          title={article.title.replace(text, `<b>${text}</b>`)}
          clickQuery={props.clickQuery}
          colors={props.colors}
        />
      );
    });
    setDataElems(newData);
  }
  return (
    <SearchbarForm colors={props.colors} onSubmit={props.search}>
      <ActualSearch>
        <SearchIconHolder colors={props.colors}>
          <FontAwesomeIcon icon={faSearch} className="icon search-icon">
            {" "}
          </FontAwesomeIcon>
        </SearchIconHolder>

        <SearchBarInput
          type="text"
          name="" // removed name = search?
          colors={props.colors}
          value={props.searchText}
          onChange={filterSearch}
          onFocus={focusSearch}
          onBlur={loseFocusSearch}
        />

        <SearchIconHolder colors={props.colors} onClick={props.clearText}>
          <FontAwesomeIcon
            onClick={props.clearText}
            icon={faTimes}
            className="icon clear-search"
          ></FontAwesomeIcon>
        </SearchIconHolder>
      </ActualSearch>

      {focus && <ul className="search-query-cont">{dataElems}</ul>}
    </SearchbarForm>
  );
}
