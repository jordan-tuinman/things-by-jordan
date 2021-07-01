import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

// React icons:
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"
import { CgClose } from "react-icons/cg"

const Slider = ({ slides, selectedSlide }) => {
  function closeModal() {
    const modal = document.getElementById("myModal")
    modal.style.display = "none"
  }

  const [current, setCurrent] = useState()
  useEffect(() => {
    setCurrent(selectedSlide)
  }, [selectedSlide])

  const length = slides.length

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className="slider">
      <AiFillLeftCircle
        className="left-arrow"
        onClick={() => {
          prevSlide()
        }}
      />
      {slides.map((slide, index) => (
        <ImageWrapper key={index}>
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            <CloseButton>
              <CgClose
                onClick={() => {
                  closeModal()
                }}
              />
            </CloseButton>
            {index === current && (
              <GatsbyImage
                className="slider-image"
                image={slide.node.image.gatsbyImageData}
                alt={slide.node.title}
              />
            )}
          </div>
        </ImageWrapper>
      ))}
      <AiFillRightCircle
        className="right-arrow"
        onClick={() => {
          nextSlide()
        }}
      />
    </section>
  )
}

export default Slider

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CloseButton = styled.div`
  position: absolute;
  display: block;
  padding: 1rem;
  top: 0;
  right: 5%;
  font-size: clamp(1rem, 5vw, 2rem);
  cursor: pointer;
  color: #fff;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  z-index: 100;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    padding: 0.5rem;
  }
`
