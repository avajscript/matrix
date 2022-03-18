import React from "react";
import styled from "styled-components";
import COLORS from "../Data/colors";
import ViewAll from "../components/viewall/index";
const ViewAllPage = () => {
  return (
    <div>
      <ViewAll colors={COLORS} />
    </div>
  );
};

export default ViewAllPage;
