import React from "react";
import styled from "styled-components";
import COLORS from "../Data/colors";
import {gql, GraphQLClient} from 'graphql-request';
import Search from "../components/search/SearchContent";

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url,{
    header:{
      Authorization:process.env.GRAPH_CMS_TOKEN,
    }
  })
}
const SearchPage = () => {
  return (
    <div>
      <Search colors={COLORS} />
   
    </div>
  );
};

export default SearchPage;
