import React from "react";
import styled from "styled-components";

const SubArticleElem = styled.li`
  width: 100%;
  height: 75px;
  list-style: none;
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-position: -50%;
  cursor: pointer;
  margin-bottom: 1rem;
  border: 2px solid ${(props) => props.colors.blackA};
  &:hover {
    h2,
    p {
      color: ${(props) => props.colors.greenA};
    }
  }
`;

const TextDiv = styled.div`
  background-color: #4b3d8f;
  width: 75%;
  height: 100%;
  float: right;
  text-align: right;
  clip-path: polygon(30% 0%, 101% 0, 100% 100%, 0 100%);
  padding: 5px 5px 5px 25px;
`;

export default function SubArticle(props) {
  return (
    <SubArticleElem colors={props.colors} url={props.url}>
      <a href={`#${props.fullTitle}`}>
        <TextDiv>
          <h2> {props.title} </h2>
          <p> {props.subTitle} </p>
        </TextDiv>
      </a>
    </SubArticleElem>
  );
}
