import React from "react";
import styled from "styled-components";
import Data from "../../Data/Articles";
import SearchBar from "./SearchBar";
import Article from "./Article";
import { nanoid } from "nanoid";
const SearchResultsElem = styled.div`
  margin: 5% 10% 0;
  display: grid;
  gap: 2rem;
`;

export default function SearchResults(props) {
  const [articles, setArticles] = React.useState(
    Data.map((article) => {
      return (
        <Article
          key={nanoid()}
          title={article.title}
          date={article.date}
          content={article.content}
          colors={props.colors}
        />
      );
    })
  );
  React.useEffect(() => {
    const newData = Data.filter((article) => {
      if (props.searchText === "") {
        return true;
      } else if (
        article.title.toLowerCase().includes(props.searchText.toLowerCase())
      ) {
        return true;
      }
    }).map((article) => {
      return (
        <Article
          key={nanoid()}
          title={article.title}
          date={article.date}
          content={article.content}
          colors={props.colors}
        />
      );
    });
    setArticles(newData);
  }, [props.searchText]);
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
      {articles}
    </SearchResultsElem>
  );
}
