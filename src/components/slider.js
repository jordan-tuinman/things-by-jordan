import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"

import { useArtDataQuery } from "../hooks/useArtDataQuery"

const Slider = ({ placeholder }) => {
  const artData = useArtDataQuery()

  const [current, setCurrent] = useState(0)
  const length = artData.length

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(artData) || artData.length <= 0) {
    return null
  }

  console.log(artData)
  // TODO: pass in data from parent component at "placeholder"
  return (
    <section className="slider">
      <AiFillLeftCircle
        className="left-arrow"
        onClick={() => {
          prevSlide()
        }}
      />

      <h1>slider test</h1>

      {artData.map((slide, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && (
            <GatsbyImage
              className="slider-image"
              image={slide.node.image.gatsbyImageData}
              alt={slide.node.title}
            />
          )}
        </div>
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
