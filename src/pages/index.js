import React from "react"

// Components:
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"

// Contentful data:
import { useAuthorDataQuery } from "../hooks/useAuthorDataQuery"

const IndexPage = () => {
  const authorData = useAuthorDataQuery()

  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <About />
      <h1>Test header</h1>
    </Layout>
  )
}

export default IndexPage
