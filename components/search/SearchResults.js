import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { nanoid } from "nanoid";
const SearchResultsElem = styled.div`
  margin: 5% 10% 0;
  display: grid;
  gap: 2rem;
`;

export default function SearchResults(props) {
  
  return (
    <SearchResultsElem>
      <SearchBar
        searchText={props.searchText}
        updateText={props.updateText}
        clearText={props.clearText}
        search={props.search}
        clickQuery={props.clickQuery}
        colors={props.colors}
      />
      {props.articles}
    </SearchResultsElem>
  );
}
