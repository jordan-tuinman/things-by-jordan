import { useStaticQuery, graphql } from "gatsby"

// Sorted DESC by project ID

export const useWorkDataQuery = () => {
  const workDataQuery = useStaticQuery(graphql`
    query WorkDataQuery {
      allContentfulWork(sort: { fields: contentfulid, order: DESC }) {
        edges {
          node {
            contentfulid
            nameOfProject
            projectBrief
            projectDate(formatString: "MM/yyyy")
            projectDescription {
              projectDescription
            }
            projectImages {
              description
              gatsbyImageData
              title
            }
            projectLink
          }
        }
      }
    }
  `)
  const workData = workDataQuery.allContentfulWork.edges
  return workData
}