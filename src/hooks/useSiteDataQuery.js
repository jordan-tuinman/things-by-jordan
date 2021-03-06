import { useStaticQuery, graphql } from "gatsby"

export const useSiteDataQuery = () => {
  const siteDataQuery = useStaticQuery(graphql`
    query SiteDataQuery {
      allContentfulSiteData {
        edges {
          node {
            contactText {
              childMarkdownRemark {
                html
              }
            }
            alternateLandingImage {
              gatsbyImageData
              id
              description
              title
            }
            landingImage {
              gatsbyImageData
              id
              description
              title
            }
            landingImageText {
              gatsbyImageData
              id
              description
              title
            }
            siteLogo {
              gatsbyImageData
              id
              description
              title
            }
            pageNotFoundImage {
              gatsbyImageData
              id
              description
              title
            }
            siteTag
            siteTitle
          }
        }
      }
    }
  `)
  const siteData = siteDataQuery.allContentfulSiteData.edges[0].node
  return siteData
}
