import React from "react";
import styled from "styled-components";
import COLORS from "../../Data/colors";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Data from '../../Data/Articles'
import Article from "./Article";
import {nanoid} from 'nanoid';

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
  const [articleLines, setArticleLines] = React.useState(
    Data.map(article=>{
      return article.title;
    })
  );
  

  
    
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
    setSearchText(prevText=>{
      return '';
    });
  }
  function clickQuery(value) {
    const val = value;
    console.log(val);
    setSearchText(prevValue=>{
      return val;
    });
    setSearchedTrue();
  }
  function search(e) {
    e.preventDefault();
    if (searchText !== "") {
      setSearchedTrue();
    }
  }
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
      if (searchText === "") {
        return true;
      } else if (
        article.title.toLowerCase().includes(searchText.toLowerCase())
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
    setArticles(oldData=>{
      return [...newData]
    });

    const newLines = Data.filter((article) => {
      if(
        article.title.toLowerCase().includes(searchText.toLowerCase())
      ){
        return true;
      }
      
    })
    
    setArticleLines(prevLines=>{
      return newLines;
    })
  }, [searchText]);
  return !searched ? (
    <SearchContentElem colors={props.colors}>
      <CenterSearch>
        <h1> Search </h1>
        <SearchBar
          articleLines = {articleLines}
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
      articles = {articles}
      searchText={searchText}
      articleLines = {articleLines}
      updateText={updateText}
      clearText={clearText}
      search={search}
      clickQuery={clickQuery}
      colors={COLORS}
    />
  );
}
