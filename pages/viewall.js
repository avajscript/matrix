import React from "react";
import styled from "styled-components";
import COLORS from "../Data/colors";
import ViewAll from "../components/viewall/index";
import { gql, GraphQLClient } from "graphql-request";
import Article from "../components/viewall/Article";
export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    header: {
      Authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });
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
  `;
  const data = await graphQLClient.request(query);
  const articles = data.catagory.article;
  return {
    props: {
      articles,
    },
  };
};
const ViewAllPage = ({ articles }) => {
  return <ViewAll />;
};

export default ViewAllPage;
