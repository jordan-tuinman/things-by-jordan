import React from "react"
import styled from "styled-components"

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
  SiWordpress,
} from "react-icons/si"

const Technologies = ({ title }) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      <Wrapper>
        <HtmlIcon
          className="tech"
          target="_blank"
          href="https://html.spec.whatwg.org/"
        >
          <SiHtml5 />
        </HtmlIcon>
        <CssIcon
          className="tech"
          target="_blank"
          href="https://www.w3.org/Style/CSS/Overview.en.html"
        >
          <SiCss3 />
        </CssIcon>
        <JsIcon
          className="tech"
          target="_blank"
          href="https://www.javascript.com/"
        >
          <SiJavascript />
        </JsIcon>
        <WordpressIcon
          className="tech"
          target="_blank"
          href="https://wordpress.com/"
        >
          <SiWordpress />
        </WordpressIcon>
        <ReactIcon className="tech" target="_blank" href="https://reactjs.org/">
          <SiReact />
        </ReactIcon>
        <ReduxIcon
          className="tech"
          target="_blank"
          href="https://redux.js.org/"
        >
          <SiRedux />
        </ReduxIcon>
        <GatsbyIcon
          className="tech"
          target="_blank"
          href="https://www.gatsbyjs.com/"
        >
          <SiGatsby />
        </GatsbyIcon>
        <NodeIcon
          className="tech"
          target="_blank"
          href="https://nodejs.org/en/"
        >
          <SiNodeDotJs />
        </NodeIcon>
        <JestIcon className="tech" target="_blank" href="https://jestjs.io/">
          <SiJest />
        </JestIcon>
      </Wrapper>
    </Container>
  )
}

export default Technologies

const Container = styled.div`
  background: #fcfcfc;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`

const Heading = styled.p`
  margin-bottom: 1.5rem;
  font-weight: bold;
`

const WordpressIcon = styled.a`
  filter: grayscale(50%);
  color: #21759b;

  &:hover {
    filter: none;
  }
`

const HtmlIcon = styled.a`
  filter: grayscale(50%);
  color: #f06529;

  &:hover {
    filter: none;
  }
`

const CssIcon = styled.a`
  filter: grayscale(50%);
  color: #2965f1;

  &:hover {
    filter: none;
  }
`

const JsIcon = styled.a`
  filter: grayscale(50%);
  color: #ffd43b;

  &:hover {
    filter: none;
  }
`

const ReactIcon = styled.a`
  filter: grayscale(50%);
  color: #61dbfb;

  &:hover {
    filter: none;
  }
`

const ReduxIcon = styled.a`
  filter: grayscale(50%);
  color: #764abc;

  &:hover {
    filter: none;
  }
`

const GatsbyIcon = styled.a`
  filter: grayscale(50%);
  color: #663399;

  &:hover {
    filter: none;
  }
`

const NodeIcon = styled.a`
  filter: grayscale(50%);
  color: #3c873a;

  &:hover {
    filter: none;
  }
`

const JestIcon = styled.a`
  filter: grayscale(50%);
  color: #ce375c;

  &:hover {
    filter: none;
  }
`
