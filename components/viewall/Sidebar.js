import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import SubArticle from "./SubArticle";
import Articles from "../../Data/Articles";
import { nanoid } from "nanoid";

const SidebarCont = styled.div`
  width: 250px;
  height: 100%;
  left: ${(props) => props.left + "px"};
  position: fixed;
  background-color: ${(props) => props.colors.blackD};
  transition: left 0.5s ease;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const SidebarElem = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.colors.blackD};
  padding: 30px 15px;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 1em;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.colors.blackA};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.colors.greenA};
    border-radius: 1rem;
    border: 2px solid ${(props) => props.colors.blackA};
    &:hover {
      background: ${(props) => props.colors.greenB};
    }
  }
`;

const ToggleNavbar = styled.div`
  cursor: pointer;
  float: right;
  & > * {
    transform: rotate(${(props) => props.degrees}deg);
  }
  &:hover {
    * {
      color: ${(props) => props.colors.greenB};
    }
  }
`;

export default function Sidebar(props) {
  const [open, setOpen] = React.useState(true);
  const sideArticles = props.articles.map((article, index) => {
  
    return (
      <SubArticle
        key={nanoid()}
        colors={props.colors}
        title={article.briefTitle}
        fullTitle={article.title}
        url={article.coverImage.url}
      />
    );
  });
  function toggleNavbar() {
    setOpen(!open);
  }
  let left = "",
    degrees = 0;
  if (open) {
    left = 0;
    degrees = 0;
  } else {
    left = "-220";
    degrees = 180;
  }

  return (
    <SidebarCont left={left} colors={props.colors}>
      <ToggleNavbar
        degrees={degrees}
        onClick={toggleNavbar}
        colors={props.colors}
      >
        <FontAwesomeIcon icon={faAngleDoubleLeft} size="2x" className="icon ">
          {" "}
        </FontAwesomeIcon>
      </ToggleNavbar>
      <SidebarElem colors={props.colors}>{sideArticles}</SidebarElem>
    </SidebarCont>
  );
}
