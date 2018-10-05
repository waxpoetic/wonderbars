/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const BlogPost = path.resolve('./src/templates/blog-post.js')
    const Page = path.resolve('./src/templates/page.js')

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }

            allEventsYaml {
              edges {
                node {
                  name
                  date
                  guests
                  location
                  description
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;
        const events = result.data.allEventsYaml.edges;
        const createBlogPost = (post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node
          const { fields: { slug }, frontmatter: { date } } = post.node
          const component = date === null ? Page : BlogPost

          createPage({
            path: slug,
            component,
            context: {
              slug,
              previous,
              next,
            },
          })
        }

        // _.each(posts, createBlogPost)
        // _.each(events, createEvent)
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
