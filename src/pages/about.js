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
        heading="About me"
        textContent={authorData.about.childMarkdownRemark.html}
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
  width: 80%;
  justify-content: center;
  background: #fcfcfc;
  padding: 1rem 0;
`
