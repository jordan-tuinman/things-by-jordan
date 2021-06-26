import React from "react"
import styled from "styled-components"

// Components:
import Layout from "../components/layout"
import About from "../components/about"

// Contentful data:
import { useAuthorDataQuery } from "../hooks/useAuthorDataQuery"
import Technologies from "../components/technologies"

const AboutPage = () => {
  const authorData = useAuthorDataQuery()

  return (
    <Layout>
      <About
        textContent={authorData.about.childMarkdownRemark.html}
        title={"A full stack developer with a difficult to say last name"}
      />
      <Wrapper>
        <Technologies />
      </Wrapper>
    </Layout>
  )
}

export default AboutPage

const Wrapper = styled.div`
  background: #fcfcfc;
  padding: 1rem 4rem;
`
