import React from "react";
import styled from "styled-components";
import COLORS from "../../Data/colors";
import { gql, GraphQLClient } from "graphql-request";
import Markdown from "markdown-to-jsx";

const ArticleCont = styled.div`
  background-color: white;
  width: 80%;
  margin: 2rem auto;
  border-radius: 0.5rem;
  p{
    color:black;
  }
  @media screen and (max-width: 412px) {
    img {
      width: 100% !important;
    }
    
  }
  @media screen and (max-width: 992px) {
    width: 100%;
    h1 {
      font-size: 2rem !important;
      padding: 0.5rem 0 !important;
    }
  }
  h1 {
    padding: 1rem 0;
    font-size: 2.5rem;
    text-align: center;
    color:black;
  }
  .title {
    border-bottom: 2px solid ${(props) => props.colors.greenA};
  }
  .credit {
    margin-left: 20px;
    font-style: italic;
    p {
      color: #979797;
    }
  }
  img {
    display: block;
    width: 70%;
    margin: 2rem auto;
  }
`;
const TextContent = styled.div`
  padding: 0 20px 20px;
`;
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
      article(where: { title: $pageSlug }) {
        title
        author
        date
        coverImage {
          url
        }
        content {
          markdown
        }
      }
    }
  `;
  const variables = {
    pageSlug,
  };
  const data = await graphQLClient.request(query, variables);
  const article = data.article;
  return {
    props: {
      article,
      pageSlug,
    },
  };
};
const Article = ({ article, pageSlug }) => {
  console.log(pageSlug);
  return (
    <ArticleCont colors={COLORS}>
      <div className="title">
        <h1>{article.title}</h1>
        <div className="credit">
          <p>Written by {article.author} </p>
          <p>Published on {new Date(article.date).toDateString()}</p>
        </div>
      </div>
      <img src={article.coverImage.url} />
      <TextContent>
        <Markdown>{article.content.markdown}</Markdown>
      </TextContent>
    </ArticleCont>
  );
};

export default Article;
