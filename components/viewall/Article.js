import React from "react";
import styled from "styled-components";
import Image from "next/image";
const ArticleElem = styled.div`
  width: 100%;
  cursor: pointer;
  border-bottom: 2px solid ${(props) => props.colors.greenA};
  padding-bottom: 1rem;
  &:hover {
    h1,
    p {
      text-decoration: underline;
    }
  }
  img {
    width: 100%;
    margin-bottom: 1rem;
    @media screen and (min-width: 1202px) {
      width: 75%;
    }
  }
`;

const HeadPara = styled.p`
  color: ${(props) => props.colors.greyB};
  line-height: 1;
  margin-bottom: 1rem;
`;

export default function Article(props) {
  return (
    <ArticleElem colors={props.colors} id={props.title}>
      <h1> {props.title} </h1>
      <HeadPara colors={props.colors}> Published {props.date} </HeadPara>
      <HeadPara colors={props.colors}> Written By {props.author} </HeadPara>
      <img src={props.url} />
      <p>{props.content}</p>
    </ArticleElem>
  );
}
