import React from "react";
import styled from "styled-components";
import COLORS from "../../Data/colors";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const SearchContentElem = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${(props) => props.colors.blackB};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CenterSearch = styled.div`
  text-align: center;
  position: absolute;
  top: 25%;
`;

export default function SearchContent(props) {
  const [searched, setSearched] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");

  function setSearchedTrue() {
    setSearched(true);
  }
  function setSearchedFalse() {
    setSearched(false);
  }
  function updateText(e) {
    setSearchText(e.currentTarget.value);
  }
  function clearText() {
    setSearchText("");
  }
  function clickQuery(value) {
    setSearchText(value);
    setSearchedTrue();
  }
  function search(e) {
    e.preventDefault();
    if (searchText !== "") {
      setSearchedTrue();
    }
  }
  return !searched ? (
    <SearchContentElem colors={props.colors}>
      <CenterSearch>
        <h1> Search </h1>
        <SearchBar
          searchText={searchText}
          updateText={updateText}
          clearText={clearText}
          search={search}
          clickQuery={clickQuery}
          colors={COLORS}
        />
      </CenterSearch>
    </SearchContentElem>
  ) : (
    <SearchResults
      searchText={searchText}
      updateText={updateText}
      clearText={clearText}
      search={search}
      clickQuery={clickQuery}
      colors={COLORS}
    />
  );
}
