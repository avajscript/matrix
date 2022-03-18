import React from "react";
import styled from "styled-components";
import Article from "./Article";
import Articles from "../../Data/Articles";
const ArticleHolderElem = styled.div`
  width: 50%;
  margin: 0 auto;
`;

export default function ArticleHolder(props) {
  const articleElems = Articles.map((article) => {
    return (
      <Article
        title={article.title}
        author={article.author}
        date={article.date}
        url={article.url}
        content={article.content}
        colors={props.colors}
      />
    );
  });

  return <ArticleHolderElem>{articleElems}</ArticleHolderElem>;
}
