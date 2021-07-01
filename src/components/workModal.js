import React, { useState } from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

// React icons:
import { CgClose } from "react-icons/cg"

// Components:
import WorkSlider from "./workSlider"

// Contentful data:
import { useWorkDataQuery } from "../hooks/useWorkDataQuery"

const WorkModal = ({ selectedImage, selectedProject }) => {
  const workData = useWorkDataQuery()
  let project = workData[selectedProject].node.projectImages

  return (
    <ModalContainer id="myModal" className={"modal"}>
      <ModalContent>
        <WorkSlider slides={project} selectedSlide={selectedImage} />
      </ModalContent>
    </ModalContainer>
  )
}

export default WorkModal

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
  @media screen and (max-width: 480px) {
    margin: 0 auto;
    width: 90%;
  }
`
