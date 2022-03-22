import React from "react";
import styled from "styled-components";
import Link from 'next/link';
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
      
    }
  }
`;

export default function Article(props) {
  return (
    <Link href = {`/article/${'props.title'}`}>
    <ArticleElem>
      <h1> {props.title} </h1>
      <Date colors={props.colors}> {props.date} </Date>
      <p> {props.content} </p>
    </ArticleElem>
    </Link>
  );
}
