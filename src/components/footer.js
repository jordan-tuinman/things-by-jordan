import React from "react"
import styled from "styled-components"

// Components:
import SocialMenu from "./socialMenu"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterDesc>
          <h1>Things by Jordan</h1>
          <p>
            a portfolio site to showcase the things created by me, Jordan
            Tuinman
          </p>
        </FooterDesc>
        <Socials>
          <SocialMenu />
        </Socials>
        <Copyright>© {new Date().getFullYear()} Jordan Tuinman</Copyright>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 2.5rem calc((100vw - 1100px) / 2);
  color: #fafafb;
  background: #000;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
`

const FooterWrapper = styled.div`
  padding: 0 1rem;
`

const FooterDesc = styled.div`
  h1 {
    margin-bottom: 1rem;
    font-family: "Creepster";
    letter-spacing: 0.2rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    padding: 0 1rem;
    padding-top: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
`

const Socials = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;
`

const Copyright = styled.p`
  font-size: 0.6rem;
  margin-top: 2rem;
  margin-bottom: 0;
`
