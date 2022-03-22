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
  const query = gql`
  query {
    articles {
      title
      author
      date
      coverImage {
        url
      }
      description
      briefTitle
    }
  }
  `
  const data = await graphQLClient.request(query);
  const articles = data.articles;
  return{
    props:{
      articles,
    }
  }
}
const SearchPage = ({articles}) => {
  console.log('xxxxx');
  console.log(articles);
  return (
    <div>
      <Search colors={COLORS} articlesImport = {articles} />
   
    </div>
  );
};

export default SearchPage;
