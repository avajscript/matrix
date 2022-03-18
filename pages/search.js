import React from "react";
import styled from "styled-components";
import COLORS from "../Data/colors";
import Search from "../components/search/SearchContent";
const SearchPage = () => {
  return (
    <div>
      <Search colors={COLORS} />
    </div>
  );
};

export default SearchPage;
