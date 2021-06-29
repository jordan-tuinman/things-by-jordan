import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

// Components:
import Layout from "../components/layout"

import { useSiteDataQuery } from "../hooks/useSiteDataQuery"

const PageNotFound = () => {
  const siteData = useSiteDataQuery()
  return (
    <Layout>
      <PageImage
        image={siteData.pageNotFoundImage.gatsbyImageData}
        alt={siteData.pageNotFoundImage.title}
      />
    </Layout>
  )
}

export default PageNotFound

const PageImage = styled(GatsbyImage)`
  margin-top: -100px;
  height: 100vh;
`
