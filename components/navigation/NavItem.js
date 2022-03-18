import React from "react";
import styled from "styled-components";
import Link from "next/link";

const NavLinkLi = styled.li`
  background-color: ${(props) => props.colors.blackC};
  padding: 5px 10px;
  border-radius: 0.5rem;
  margin: 0 5%;
  height: 40px;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.colors.blackD};
    h2 {
      color: ${(props) => props.colors.greenA};
    }
  }
`;

export default function NavItem(props) {
  return (
    <NavLinkLi colors={props.colors}>
      <Link href={props.link}>
        <h2> {props.title} </h2>
      </Link>
    </NavLinkLi>
  );
}
