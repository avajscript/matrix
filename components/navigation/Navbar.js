import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

const NavbarElem = styled.div`
  background-color: ${(props) => props.colors.blackA};
  display: flex;
  justify-content: center;
  height: 60px;
  align-items: center;
`;

export default function NavBar(props) {
  return (
    <NavbarElem colors={props.colors}>
      <NavItem colors={props.colors} link="/search" title="Search" />
      <NavItem colors={props.colors} link="/viewall" title="View All" />
      <NavItem colors={props.colors} link="/catagories" title="Catagories" />
      <NavItem colors = {props.colors} link = '/about' title = 'About' />
    </NavbarElem>
  );
}
