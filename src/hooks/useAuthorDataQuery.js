import { useStaticQuery, graphql } from "gatsby"

export const useAuthorDataQuery = () => {
  const authorDataQuery = useStaticQuery(graphql`
    query AuthorDataQuery {
      allContentfulAuthor {
        edges {
          node {
            about {
              childMarkdownRemark {
                html
              }
            }
            learning {
              childMarkdownRemark {
                html
              }
            }
            authorImage {
              description
              gatsbyImageData
              id
              title
            }
            brief {
              childMarkdownRemark {
                html
              }
            }
            email
            github
            id
            instagram
            name
          }
        }
      }
    }
  `)
  const authorData = authorDataQuery.allContentfulAuthor.edges[0].node
  return authorData
}
