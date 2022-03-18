import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import COLORS from "../../Data/colors";
import ArticleHolder from "./ArticleHolder";
const Content = styled.div``;

export default function ContentHolder() {
  return (
    <Content>
      <Sidebar colors={COLORS}></Sidebar>
      <ArticleHolder colors={COLORS} />
    </Content>
  );
}
