import React from "react"
import styled from "styled-components"

// Components:
import ArtSlider from "./artSlider"

// Contentful data:
import { useArtDataQuery } from "../hooks/useArtDataQuery"

const ArtModal = ({ selected }) => {
  const artData = useArtDataQuery()

  return (
    <ModalContainer id="myModal" className="modal">
      <ModalContent>
        <ArtSlider slides={artData} selectedSlide={selected} />
      </ModalContent>
    </ModalContainer>
  )
}

export default ArtModal

const ModalContainer = styled.div`
  display: none;
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto auto;
  width: 50%;

  @media screen and (max-width: 1050px) {
    margin: 0 auto;
    width: 90%;
  }
  @media screen and (max-width: 480px) {
    margin: 0 auto;
    width: 90%;
  }
`
