import React from "react"
import styled from "styled-components"

// TODO: icons colour on hover and adjust padding/margin - closer to about section

// React Icons:
import {
  SiReact,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGatsby,
  SiNodeDotJs,
  SiJest,
} from "react-icons/si"

// TODO: add links to icons

const Technologies = ({ heading }) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Wrapper>
        <SiHtml5 />
        <SiCss3 />
        <SiJavascript />
        <SiReact />
        <SiRedux />
        <SiGatsby />
        <SiNodeDotJs />
        <SiJest />
      </Wrapper>
    </Container>
  )
}

export default Technologies

const Container = styled.div`
  padding: 3rem 0;
  background: #fcfcfc;
  color: #1a1a1a;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  font-size: 4rem;
`

const Heading = styled.div`
  font-weight: 400;
  font-size: clamp(1.25rem, 3vw, 2rem);
  text-align: center;
  margin-bottom: 3rem;
  color: #000;
`
