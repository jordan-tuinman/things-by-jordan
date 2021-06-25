import React from "react"

// Components:
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Work from "../components/work"

// Contentful data:
import { useAuthorDataQuery } from "../hooks/useAuthorDataQuery"

const IndexPage = () => {
  const authorData = useAuthorDataQuery()

  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <About textContent={authorData.brief.brief} />
      <Work heading="Work Things" />
    </Layout>
  )
}

export default IndexPage
