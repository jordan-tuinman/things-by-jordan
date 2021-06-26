import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

// Components:
import Button from "./button"

// Contentful data:
import { useAuthorDataQuery } from "../hooks/useAuthorDataQuery"
import Technologies from "./technologies"

// TODO: pass in data from contentful as textContent to reuse component on about page and index

const About = ({ heading, textContent, title, technologies, button }) => {
  const authorData = useAuthorDataQuery()

  return (
    <AboutContainer>
      <Description className="greenfuz">{heading}</Description>
      <ContentWrapper>
        <ColumnOne>
          <AboutImage
            image={authorData.authorImage.gatsbyImageData}
            alt={authorData.authorImage.title}
          />
        </ColumnOne>
        <ColumnTwo>
          <TextWrapper>
            <h2>{title}</h2>
            <List
              dangerouslySetInnerHTML={{
                __html: `${textContent}`,
              }}
            />
          </TextWrapper>
          <TextWrapper>
            {technologies ? <Technologies title="Technologies" /> : <></>}
          </TextWrapper>
          {button ? (
            <ButtonWrapper>
              <Button primary="true" round="true" to="/about">
                more about me
              </Button>
            </ButtonWrapper>
          ) : (
            <></>
          )}
        </ColumnTwo>
      </ContentWrapper>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 3rem calc((100vw - 1300px) / 2);
`

const Description = styled.h2`
  text-align: start;
  text-align: center;
  margin-bottom: 2rem;
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: bold;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  align-items: center;
  padding: 0 4rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 400px) {
    padding: 0 2rem;
  }
`

const ColumnOne = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`

const AboutImage = styled(GatsbyImage)`
  height: 100%;
`

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 2;
  padding-top: 1.5rem;
  padding-left: 1rem;

  a {
    color: inherit;
  }
`

const TextWrapper = styled.div`
  padding: 1rem 1rem;

  h3 {
    padding-bottom: 1rem;
    font-size: 1.5rem;
    color: #1a1a1a;
  }

  p {
    color: #3b3b3b;
  }
`
const ButtonWrapper = styled.div`
  padding: 1rem 1rem;
`
