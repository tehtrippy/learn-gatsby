import { graphql } from 'gatsby';
import React from 'react';

const Blog = ({ data: { markdownRemark } }: any) => {
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <h1 className='font-semibold text-red-500'>{frontmatter.title}</h1>
      <div className='mt-4' dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Blog;

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
