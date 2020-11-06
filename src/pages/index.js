import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Button, Text, useColorMode } from "@chakra-ui/core"

const BlogIndex = ({ data, location }) => {
  const { toggleColorMode } = useColorMode()
  return (
    <Box m={3} p={6}>
      <Button onClick={toggleColorMode}>Toggle color mode</Button>
      <Text fontSize="3xl" color="blue.500">
        Hello World
      </Text>
    </Box>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
