import React from 'react';
import { graphql, Link } from 'gatsby';

const BlogPage = ({ data: { allMarkdownRemark } }: any) => {
  return (
    <div>
      <h1 className='text-xl font-semibold text-indigo-900'>
        All Markdown Files
      </h1>
      <ul className='flex flex-col mt-4 space-y-2 list-disc marker:text-red-500'>
        {allMarkdownRemark.edges.map(({ node }: any) => (
          <li key={node.id}>
            <Link to={`/blog/${node.id}`}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
