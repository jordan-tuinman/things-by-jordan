import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

// Components:
import Layout from "../components/layout"
import Seo from "../components/seo"
import ArtModal from "../components/artModal"

// Contentful data:
import { useArtDataQuery } from "../hooks/useArtDataQuery"
import { node } from "prop-types"

const ArtPage = () => {
  const artData = useArtDataQuery()

  const [content, setModalContent] = useState()
  const [selectedImage, setSelectedImage] = useState()

  function openModal(content, index) {
    const modal = document.getElementById("myModal")
    modal.style.display = "block"
    setModalContent(content)
    setSelectedImage(index)
  }

  return (
    <Layout>
      <Seo title="Art" />
      <ArtContainer>
        <Heading className="creepster">Arty Things</Heading>
        <Text>
          This is just a space for me to share some of my drawings, art, and
          other designs. Mostly I just like to draw for fun, mucking about with
          both traditional and digital art.
        </Text>
        <ImagesWrapper>
          {artData.map((item, index) => (
            <ArtCard key={index}>
              <ArtImage
                image={item.node.image.gatsbyImageData}
                alt={item.node.title}
                onClick={() => {
                  openModal(item.node, index)
                }}
              />
              <TextWrap>
                <ArtDescription>{item.node.title}</ArtDescription>
              </TextWrap>
            </ArtCard>
          ))}
        </ImagesWrapper>
        <ArtModal modalContent={content} selected={selectedImage} />
      </ArtContainer>
    </Layout>
  )
}

export default ArtPage

const ArtContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 400px) {
    padding-bottom: 0;
  }
`

const Heading = styled.p`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;

  @media screen and (max-width: 400px) {
    margin-bottom: 1rem;
  }
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 2;
  padding: 1rem 1rem;
  width: 90%;
  padding-bottom: 2rem;
  font-size: 1rem;

  a {
    color: inherit;
  }
`

const ImagesWrapper = styled.div`
  background-color: #0c0c0c;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  @media screen and (max-width: 1050px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0px;
    padding: 0 0rem;
  }
`

const ArtCard = styled.div`
  line-height: 1.5;
  width: 100%;
  height: 300px;
  position: relative;
  transition: 0.2s ease;
  background: #fcfcfc;
  transition: 0.3s !important;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(100%);
    cursor: pointer;
  }

  @media screen and (max-width: 400px) {
    height: 200px;
  }
`

const ArtImage = styled(GatsbyImage)`
  height: 100%;
  max-width: 100%;
  filter: brightness(60%);
`

const TextWrap = styled.div`
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  color: #e6e6e6;
  padding: 1rem 1rem;
  width: 100%;
`

const ArtDescription = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1;
`
