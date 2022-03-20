import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import COLORS from "../../Data/colors";
import ArticleHolder from "./ArticleHolder";
const Content = styled.div``;

export default function ContentHolder(props) {
  return (
    <Content>
      <Sidebar articles={props.articles} colors={COLORS}></Sidebar>
      <ArticleHolder articles={props.articles} colors={COLORS} />
    </Content>
  );
}
