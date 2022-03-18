import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchIconHolder = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchLineElem = styled.li`
  width: 100%;
  height: 38px;
  display: flex;
  background-color: ${(props) => props.colors.blackA};
  border-style: none;
  align-items: center;
  cursor: auto;
  p {
    font-size: 16px;
  }
  &:hover {
    background-color: ${(props) => props.colors.blackD};
    p {
      color: ${(props) => props.colors.greenA};
    }
  }
`;
export default function SearchLine(props) {
  const [title, setTitle] = React.useState(props.title);
  return (
    <SearchLineElem
      colors={props.colors}
      onClick={() => props.clickQuery(title)}
      value={props.title}
    >
      <SearchIconHolder>
        <FontAwesomeIcon icon={faSearch} className="icon search-icon">
          {" "}
        </FontAwesomeIcon>
      </SearchIconHolder>
      <p
        dangerouslySetInnerHTML={{
          __html: props.title,
        }}
      ></p>
    </SearchLineElem>
  );
}
