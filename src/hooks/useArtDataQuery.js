import { useStaticQuery, graphql } from "gatsby"

export const useArtDataQuery = () => {
  const artDataQuery = useStaticQuery(graphql`
    query ArtDataQuery {
      allContentfulArt(sort: { fields: contentfulid, order: DESC }) {
        edges {
          node {
            contentfulid
            description
            image {
              gatsbyImageData
            }
            title
          }
        }
      }
    }
  `)
  const artData = artDataQuery.allContentfulArt.edges
  return artData
}
