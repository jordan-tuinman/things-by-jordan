import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

// React icons:
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { CgClose } from "react-icons/cg"

const WorkSlider = ({ slides, selectedSlide }) => {
  function closeModal() {
    const modal = document.getElementById("myModal")
    modal.style.display = "none"
    setCurrent(selectedSlide)
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
      <span
        className="left-arrow"
        onClick={() => {
          prevSlide()
        }}
      >
        <IoIosArrowBack />
      </span>
      {slides.map((slide, index) => (
        <ImageWrapper key={index}>
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            <CloseButton
              onClick={() => {
                closeModal()
              }}
            >
              <CgClose />
            </CloseButton>
            {index === current && (
              <>
                <GatsbyImage
                  className="slider-image"
                  image={slide.gatsbyImageData}
                  alt={slide.title}
                />
                <TextWrap>
                  <WorkDescription>{slide.title}</WorkDescription>
                </TextWrap>
              </>
            )}
          </div>
        </ImageWrapper>
      ))}
      <span
        className="right-arrow"
        onClick={() => {
          nextSlide()
        }}
      >
        <IoIosArrowForward />
      </span>
    </section>
  )
}

export default WorkSlider

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CloseButton = styled.span`
  position: absolute;
  display: block;
  padding: 0.5rem 0.5rem 0 0.5rem;
  top: 0;
  right: 5%;
  font-size: clamp(1rem, 5vw, 2rem);
  cursor: pointer;
  color: #fff;
  opacity: 0.7;
  z-index: 100;

  &:hover,
  &:focus {
    text-decoration: none;
    cursor: pointer;
    opacity: 1;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }

  @media screen and (max-width: 480px) {
    padding: 0.5rem;
  }
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
  width: 90%;
`

const WorkDescription = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1;
`
