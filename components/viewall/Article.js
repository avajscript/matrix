import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
const ArticleElem = styled.div`
  width: 100%;
  cursor: pointer;
  border-bottom: 2px solid ${(props) => props.colors.greenA};
  padding-bottom: 1rem;
  &:hover {
    h1
     {
      text-decoration: underline;
      
    }
    p{
      text-decoration:underline;
      &:last-of-type{
        text-decoration:none;
      }
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
  
  &:nth-of-type(2){
    margin-bottom:1rem;
  }
`;

export default function Article(props) {
  return (
    <Link href={`/article/${props.title}`}>
      <ArticleElem colors={props.colors} id={props.title}>
        <h1> {props.title} </h1>

        <HeadPara colors={props.colors}> Published {props.date} </HeadPara>
        <HeadPara colors={props.colors}> Written By {props.author} </HeadPara>
        {props.url && <img src={props.url} />}
        <p>{props.description}</p>
      </ArticleElem>
    </Link>
  );
}
