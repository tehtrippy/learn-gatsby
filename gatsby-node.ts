import { resolve } from 'path';
import { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { errors, data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (errors) return Promise.reject(errors);

  const { allMarkdownRemark }: any = data;

  allMarkdownRemark.edges.forEach(({ node }: any) => {
    actions.createPage({
      path: `/blog/${node.id}`,
      component: resolve('src', 'templates', 'Blog.tsx'),
      context: {
        id: node.id,
      },
    });
  });
};
