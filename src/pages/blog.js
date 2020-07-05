import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export const AllBlogsQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            description
            author
            path
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => (
  <Layout>
    <h1>Blog</h1>
    {console.log(data)}
  </Layout>
)

export default Blog
