import React from "react"
import styled from "styled-components"

// Components:
import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/about"

// Contentful data:
import { useAuthorDataQuery } from "../hooks/useAuthorDataQuery"
import Technologies from "../components/technologies"

const AboutPage = () => {
  const authorData = useAuthorDataQuery()

  return (
    <Layout>
      <Seo title="About" />
      <About
        heading="About me"
        title="Hey! My name is Jordan Tuinman."
        textContent={authorData.about.childMarkdownRemark.html}
        socials="true"
      />
      <Wrapper>
        <InnerWrapper>
          <Technologies />
        </InnerWrapper>
      </Wrapper>
    </Layout>
  )
}

export default AboutPage

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fcfcfc;
  padding-bottom: 1rem;
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  background: #fcfcfc;
  padding-bottom: 1rem;
`
