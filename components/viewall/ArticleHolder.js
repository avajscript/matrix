import React from "react";
import styled from "styled-components";
import Article from "./Article";
import Articles from "../../Data/Articles";
import { nanoid } from "nanoid";
const ArticleHolderElem = styled.div`
  width: 50%;
  margin: 0 auto;
`;

export default function ArticleHolder(props) {
  const articleElems = props.articles.map((article) => {
    console.log(article.coverImage.url);
    return (
      <Article
        key={nanoid()}
        title={article.title}
        author={article.author}
        date={article.date}
        url={article.coverImage.url}
        content={article.content}
        colors={props.colors}
      />
    );
  });

  return <ArticleHolderElem>{articleElems}</ArticleHolderElem>;
}
