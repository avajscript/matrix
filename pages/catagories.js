import React from "react";
import { gql, GraphQLClient } from "graphql-request";
import styled from "styled-components";
import COLORS from "../Data/colors";
import Catagories from "../components/catagories/index";

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    header: {
      Authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });
  const query = gql`
    query {
      catagories {
        title
        coverImage {
          url
        }
      }
    }
  `;

  const data = await graphQLClient.request(query);
  const catagories = data.catagories;

  return {
    props: {
      catagories,
    },
  };
};
const CatagoryPage = ({ catagories }) => {
  return (
    <div>
      <Catagories catagories={catagories} />
    </div>
  );
};

export default CatagoryPage;
