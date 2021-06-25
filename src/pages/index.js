import React from "react"

// Components:
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

// Contentful data:
import { useAuthorDataQuery } from "../hooks/useAuthorDataQuery"

const IndexPage = () => {
  const authorData = useAuthorDataQuery()

  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <h1>Test header</h1>
    </Layout>
  )
}

export default IndexPage
