import Head from "next/head";
import { gql, GraphQLClient } from "graphql-request";
import ArticleHolder from "../../components/viewall/ArticleHolder";
import COLORS from "../../Data/colors";
export const getServerSideProps = async (pageContext) => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    header: {
      Authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });
  const pageSlug = pageContext.query.slug;

  const query = gql`
    query ($pageSlug: String!) {
      catagory(where: { title: $pageSlug }) {
        title
        coverImage {
          url
        }
        article(first: 500) {
          ... on Article {
            title
            author
            date
            coverImage {
              url
              id
            }
            content {
              markdown
            }
            description
            briefTitle
          }
        }
      }
    }
  `;
  const variables = {
    pageSlug,
  };
  const data = await graphQLClient.request(query, variables);
  const articles = data.catagory.article;

  return {
    props: {
      articles,
    },
  };
};

const slug = ({ articles }) => {
  return <ArticleHolder articles={articles} colors={COLORS} />;
};

export default slug;
