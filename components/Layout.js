import React from "react";
import styled from "styled-components";
import Navbar from "./navigation/Navbar";
import COLORS from "../Data/colors";
const Cont = styled.div``;
const Layout = ({ children }) => {
  return (
    <Cont>
      <Navbar colors={COLORS} />
      <div>{children}</div>
    </Cont>
  );
};

export default Layout;
