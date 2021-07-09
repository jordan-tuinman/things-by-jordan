import React from "react"
import styled from "styled-components"

// Contentful data:
import { useAuthorDataQuery } from "../hooks/useAuthorDataQuery"

const Learning = () => {
  const authorData = useAuthorDataQuery()
  return (
    <>
      <TextWrapper>
        <Heading>Currently learning ...🌱</Heading>
        <Text
          dangerouslySetInnerHTML={{
            __html: authorData.learning.childMarkdownRemark.html,
          }}
        />
      </TextWrapper>
    </>
  )
}

export default Learning

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 2;

  ul {
    padding-left: 1rem;
  }

  a {
    color: inherit;
  }
`

const TextWrapper = styled.div`
  p {
    color: #3b3b3b;
  }
`

const Heading = styled.p`
  margin-bottom: 1rem;
  font-weight: bold;
`
