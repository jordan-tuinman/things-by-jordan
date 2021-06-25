import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

// Components:
import Button from "./button"

// Contentful data:
import { useAuthorDataQuery } from "../hooks/useAuthorDataQuery"

// TODO: pass in data from contentful as textContent to reuse component on about page and index
// TODO: image on hover from b&w to colour

const About = ({ textContent }) => {
  const authorData = useAuthorDataQuery()

  return (
    <AboutContainer>
      <Description>a little bit about me</Description>
      <ContentWrapper>
        <ColumnOne>
          <AboutImage
            image={authorData.authorImage.gatsbyImageData}
            alt={authorData.authorImage.title}
          />
        </ColumnOne>
        <ColumnTwo>
          <TextWrapper>
            <h3>Hey, I'm Jordan!</h3>
          </TextWrapper>
          <TextWrapper>
            <p>
              {/* {textContent} */}
              My name is Jordan Tuinman. I'm a full stack developer with a
              difficult to say last name! I graduated from Enspiral Dev Academy
              in March 2021, and since then have alone worked on a few projects.
              I previously worked for Microsoft Japan, in Data Centers all
              across Tokyo. In my spare time, I like to draw with anything I can
              get my hands on, and roll around in pajamas at my local BJJ club.
              Oh, and also read books and watch shows in Japanese.
            </p>
          </TextWrapper>
          <ButtonWrapper>
            <Button primary="true" round="true" to="/about">
              more about me
            </Button>
          </ButtonWrapper>
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
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`

const Description = styled.p`
  text-align: start;
  text-align: center;
  margin-bottom: 2rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
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
`

const ColumnOne = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2rem;
`

const AboutImage = styled(GatsbyImage)`
  border-radius: 10px;
  height: 100%;
`

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`

const TextWrapper = styled.div`
  padding: 1rem 1rem;

  h3 {
    margin-botom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: #3b3b3b;
  }
`
const ButtonWrapper = styled.div`
  padding: 1rem 1rem;
`
