import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

//  React Icons:
import { MdEmail } from "react-icons/md"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

// Components:
import Button from "./button"

// Contentful data:
import { useAuthorDataQuery } from "../hooks/useAuthorDataQuery"
import Technologies from "./technologies"
import Learning from "./learning"

const About = ({
  heading,
  textContent,
  title,
  technologies,
  learning,
  button,
  socials,
}) => {
  const authorData = useAuthorDataQuery()

  return (
    <AboutContainer>
      <Description className="creepster">{heading}</Description>

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
            <Text
              dangerouslySetInnerHTML={{
                __html: `${textContent}`,
              }}
            />
          </TextWrapper>
          {technologies ? (
            <TextWrapper>
              <Technologies title="Some technologies I know" />
            </TextWrapper>
          ) : (
            <></>
          )}
          {learning ? (
            <TextWrapper>
              <Learning />
            </TextWrapper>
          ) : (
            <></>
          )}
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
      {socials ? (
        <BottomRow>
          <TextWrapper>
            <Text>
              <p>
                Whether you would like to have a chat about work, or just get in
                touch to say 'hi', I would love to hear from you!
              </p>
              <p>
                Feel free to email me at{" "}
                <a href="mailto:thingsbyjordan@gmail.com">
                  thingsbyjordan@gmail.com
                </a>
                , or connect with me on Linkedin and message me there.
              </p>
            </Text>
          </TextWrapper>
          <SocialsWrapper>
            <SocialIcon
              target="_blank"
              href="https://github.com/jordan-tuinman"
            >
              <FaGithub />
            </SocialIcon>
            {/* <SocialIcon target="_blank" href="https://www.instagram.com/jordantuna/">
        <FaInstagram />
      </SocialIcon> */}
            <SocialIcon
              target="_blank"
              href="https://www.linkedin.com/in/jordan-tuinman/"
            >
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="mailto:thingsbyjordan@gmail.com">
              <MdEmail />
            </SocialIcon>
          </SocialsWrapper>
        </BottomRow>
      ) : (
        <></>
      )}
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
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: bold;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  padding: 0 4rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 480px) {
    padding: 0 0;
  }
`

const ColumnOne = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 1rem;
`

const AboutImage = styled(GatsbyImage)`
  @media screen and (max-width: 1050px) {
    filter: brightness(100%);
    height: 60vh;
  }

  @media screen and (max-width: 480px) {
    height: 50vh;
  }
`

const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  width: 100%;
  background: #fcfcfc;
  padding: 1rem 0.5rem;
  font-size: 1.5rem;
`

const SocialIcon = styled.a`
  padding: 0 0.5rem;
  color: #1a1a1a;
  transition: 0.3s !important;

  &:hover {
    color: #3b3b3b;
    transform: translateY(-2px);
  }
`

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  padding: 0 1rem;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 2;
  padding-top: 1.5rem;

  ul {
    padding-left: 1rem;
  }

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

const BottomRow = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  padding-top: 1rem;
  width: 100%;
  text-align: center;

  p {
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    padding: 0 4.5rem;
  }

  @media screen and (max-width: 480px) {
    padding: 0 1rem;
  }
`
