import React, { useState } from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

// React icons:
import { CgClose } from "react-icons/cg"

const WorkModal = ({ modalContent }) => {
  function closeModal() {
    const modal = document.getElementById("myModal")
    modal.style.display = "none"
  }

  return (
    <ModalContainer id="myModal" className={"modal"}>
      <ModalContent>
        <CloseButton
          onClick={() => {
            closeModal()
          }}
        >
          <CgClose />
        </CloseButton>
        {modalContent ? (
          <GatsbyImage
            image={modalContent.gatsbyImageData}
            alt={modalContent.title}
          />
        ) : (
          <></>
        )}
      </ModalContent>
    </ModalContainer>
  )
}

export default WorkModal

const ModalContainer = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  margin: 10% auto;
  border: 1px solid #888;
  width: 80%;

  @media screen and (max-width: 1050px) {
    margin: 30% auto;
  }
  @media screen and (max-width: 400px) {
    margin: 50% auto;
  }
`

const CloseButton = styled.div`
  position: absolute;
  display: block;
  padding: 1rem;
  top: 0;
  right: 0;
  font-size: clamp(1rem, 5vw, 2rem);
  cursor: pointer;
  color: #fff;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  z-index: 3;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`
