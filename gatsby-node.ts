import { resolve } from 'path';
import { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const markdownEn = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "markdown-en" } }) {
        edges {
          node {
            childMarkdownRemark {
              id
              frontmatter {
                slug
              }
            }
          }
        }
      }
    }
  `);

  const markdownKo = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "markdown-ko" } }) {
        edges {
          node {
            childMarkdownRemark {
              id
              frontmatter {
                slug
              }
            }
          }
        }
      }
    }
  `);

  if (markdownEn.errors || markdownKo.errors)
    return Promise.reject(markdownEn.errors || markdownKo.errors);

  const { allFile: allMarkdownEn }: any = markdownEn.data;
  const { allFile: allMarkdownKo }: any = markdownKo.data;

  allMarkdownEn.edges.forEach(({ node }: any) => {
    actions.createPage({
      path: `/en/blog/${node.childMarkdownRemark.frontmatter.slug}`,
      component: resolve('src', 'templates', 'blog.tsx'),
      context: {
        id: node.childMarkdownRemark.id,
      },
    });
  });

  allMarkdownKo.edges.forEach(({ node }: any) => {
    actions.createPage({
      path: `/ko/blog/${node.childMarkdownRemark.frontmatter.slug}`,
      component: resolve('src', 'templates', 'blog.tsx'),
      context: {
        id: node.childMarkdownRemark.id,
      },
    });
  });
};
