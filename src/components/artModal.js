import React, { useState } from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

// React icons:
import { CgClose } from "react-icons/cg"

// Contentful data:
import { useArtDataQuery } from "../hooks/useArtDataQuery"
import Slider from "./slider"

const ArtModal = ({ modalContent, selected }) => {
  const artData = useArtDataQuery()

  function closeModal() {
    const modal = document.getElementById("myModal")
    modal.style.display = "none"
  }

  console.log(modalContent)
  console.log(selected)

  return (
    <ModalContainer id="myModal" className={"modal"}>
      <ModalContent>
        {/* <CloseButton
          onClick={() => {
            closeModal()
          }}
          >
          <CgClose />
        </CloseButton> */}
        <Slider slides={artData} selectedSlide={selected} />
      </ModalContent>
    </ModalContainer>
  )
}

export default ArtModal

const ModalContainer = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
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
  @media screen and (max-width: 400px) {
    margin: 0 auto;
    width: 90%;
  }
`

// display: flex;
// justify-content: center;
// align-items: center;
