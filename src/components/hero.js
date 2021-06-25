import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

// Contentful data:
import { useSiteDataQuery } from "../hooks/useSiteDataQuery"

const Hero = () => {
  const siteData = useSiteDataQuery()

  return (
    <HeroContainer>
      <HeroImage
        image={siteData.landingImage.gatsbyImageData}
        alt={siteData.landingImage.title}
      />
      <InnerImageWrapper>
        <GatsbyImage
          layout="fullWidth"
          image={siteData.landingImageText.gatsbyImageData}
          alt={siteData.landingImageText.title}
        />
      </InnerImageWrapper>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  margin-top: -100px;
  color: #fff;
`

const InnerImageWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`

const HeroImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`
