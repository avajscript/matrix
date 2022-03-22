import React from "react";
import styled from "styled-components";
import Article from "./Article";
import Articles from "../../Data/Articles";
import { nanoid } from "nanoid";
const ArticleHolderElem = styled.div`
  width: 50%;
  margin: 0 auto;
  @media screen and (max-width: 992px) and (min-width: 769px) {
    margin-left: 40%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export default function ArticleHolder(props) {
  const articleElems = props.articles.map((article) => {
    
    return (
      <Article
        key={nanoid()}
        title={article.title}
        author={article.author}
        date={article.date}
        url={article.coverImage.url}
        content={article.content}
        description = {article.description}
        colors={props.colors}
      />
    );
  });

  return <ArticleHolderElem>{articleElems}</ArticleHolderElem>;
}
