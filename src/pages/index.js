import React from "react"

// Components:
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Work from "../components/work"

// Contentful data:
import { useAuthorDataQuery } from "../hooks/useAuthorDataQuery"
import Contact from "../components/contact"

const IndexPage = () => {
  const authorData = useAuthorDataQuery()

  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <About
        heading="Hey - I'm Jordan"
        textContent={authorData.brief.childMarkdownRemark.html}
        title="Some things about me"
        technologies={true}
        button={true}
      />
      <Work heading="Recent Work Things" />
      <Contact />
    </Layout>
  )
}

export default IndexPage
