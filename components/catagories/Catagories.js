import React from "react";
import styled from "styled-components";
import Data from "../../Data/catData";
import Catagory from "./Catagory";
import COLORS from "../../Data/colors";
import { nanoid } from "nanoid";

const CatagoriesCont = styled.div`
  display: grid;
  margin: 5% 10%;
  grid-template-columns: repeat(3, 1fr);
  gap: 5%;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2%;
  }
`;
export default function Catagories(props) {
  const catagoryElems = props.catagories.map((catagory) => {
    return (
      <Catagory
        key={nanoid()}
        url={catagory.coverImage.url}
        title={catagory.title}
        colors={COLORS}
      />
    );
  });

  return <CatagoriesCont>{catagoryElems}</CatagoriesCont>;
}
