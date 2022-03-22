import React from "react";
import styled from "styled-components";

const Date = styled.p`
  margin-bottom: 0.5rem;
  color: ${(props) => props.colors.greyB};
`;

const ArticleElem = styled.div`
  width: 60%;
  cursor: pointer;
  h1 {
    line-height: 2.5rem;
    margin-bottom: 0.5rem;
  }
  &:hover {
    h1,
    ${Date} {
      text-decoration: underline;
      color:inherit;
    }
  }
`;

export default function Article(props) {
  return (
    <ArticleElem>
      <h1> {props.title} </h1>
      <Date colors={props.colors}> {props.date} </Date>
      <p> {props.content} </p>
    </ArticleElem>
  );
}
