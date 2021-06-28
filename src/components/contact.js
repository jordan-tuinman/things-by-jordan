import React from "react"
import styled from "styled-components"

//  React Icons:
import { MdEmail } from "react-icons/md"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

// Contentful data:
import { useSiteDataQuery } from "../hooks/useSiteDataQuery"

const Contact = () => {
  const siteData = useSiteDataQuery()
  return (
    <ContactContainer>
      <ContentWrapper>
        <Description className="greenfuz">Get in touch!</Description>
        <Text
          dangerouslySetInnerHTML={{
            __html: `${siteData.contactText.childMarkdownRemark.html}`,
          }}
        />
        <Text>
          Also you can find my GitHub account linked here, where you can explore
          through my repos and see examples of my code from way back when I
          first started learning, and right up until the present day.
        </Text>
        <Wrapper>
          <SocialIcon target="_blank" href="https://github.com/jordan-tuinman">
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
        </Wrapper>
      </ContentWrapper>
    </ContactContainer>
  )
}

export default Contact

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 3rem calc((100vw - 1300px) / 2);
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4rem;
  width: 90%;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 400px) {
    padding: 0 2rem;
  }
`

const Description = styled.h2`
  text-align: start;
  text-align: center;
  padding-top: 1rem;
  margin-bottom: 4rem;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: bold;
`
const Title = styled.h3`
  text-align: start;
  text-align: center;
  margin-bottom: 2rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 2;
  padding: 1rem 0;

  a {
    color: inherit;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  width: 100%;
  background: #fcfcfc;
  padding-top: 2rem;
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
