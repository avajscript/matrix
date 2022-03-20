import React from "react";
import styled from "styled-components";
import Link from "next/link";
const CatagoryCont = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.5s ease;
  h2 {
    transition: color 0.5s ease;
  }
  &:hover {
    transform: scale(1.05);
    h2 {
      color: white;
    }
  }
`;

const Title = styled.h2`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px;
`;
export default function Catagory(props) {
  return (
    <Link href={`/catagories/${props.title}`}>
      <CatagoryCont url={props.url}>
        <Title color={props.colors.greenA} bgColor={props.colors.blackA}>
          {" "}
          {props.title}{" "}
        </Title>
      </CatagoryCont>
    </Link>
  );
}
