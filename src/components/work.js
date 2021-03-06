import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

// Redux:
import reduxStore from "../state/reduxStore"
import { setLink } from "../state/actions/index"

// Contentful data:
import { useWorkDataQuery } from "../hooks/useWorkDataQuery"

const Work = ({ heading }) => {
  const workData = useWorkDataQuery()
  const recentWork = workData.slice(0, 4) // 4 showcases on landing page

  return (
    <WorkContainer>
      <WorkHeading className="creepster">{heading}</WorkHeading>
      <WorkWrapper>
        {recentWork.map((item, index) => (
          <Link
            key={index}
            to="/work"
            onClick={() => {
              reduxStore.dispatch(setLink(index))
            }}
          >
            <ProjectCard>
              <ProjectImage
                image={item.node.projectImages[0].gatsbyImageData}
                alt={item.node.projectImages[0].title}
              />
              <ProjectInfo>
                <TextWrap>
                  <TitleWrap>
                    <ProjectTitle>{item.node.nameOfProject}</ProjectTitle>
                    <ProjectDate>{item.node.projectDate}</ProjectDate>
                  </TitleWrap>
                  <ProjectBrief>{item.node.projectBrief}</ProjectBrief>
                </TextWrap>
              </ProjectInfo>
            </ProjectCard>
          </Link>
        ))}
      </WorkWrapper>
    </WorkContainer>
  )
}

export default Work

const WorkContainer = styled.div`
  min-height: 60vh;
  padding: 4rem calc((100vw - 1300px) / 2);
  background: #f5f5f5;
  color: #000;

  @media screen and (max-width: 1000px) {
    padding: 2rem calc((100vw - 1300px) / 2);
  }

  @media screen and (max-width: 480px) {
    padding: 0 0rem;
    padding-top: 2rem;
  }
`

const WorkHeading = styled.p`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;

  @media screen and (max-width: 480px) {
    margin-bottom: 2rem;
  }
`

const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
    padding: 0 0rem;
  }
`

const ProjectCard = styled.div`
  line-height: 1.5;
  width: 100%;
  height: 300px;
  position: relative;
  transition: 0.2s ease;
  background: #fcfcfc;
`

const ProjectImage = styled(GatsbyImage)`
  height: 100%;
  max-width: 100%;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
    cursor: pointer;
  }

  @media screen and (max-width: 1050px) {
    filter: brightness(100%);
  }
`

const ProjectInfo = styled.div`
  position: absolute;
  top: 240px;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1rem;
  box-shadow: 0px 8px 8px 0px rgb(53 58 64 / 60%);

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }

  &:hover {
    cursor: pointer;
  }
`

const TextWrap = styled.div`
  width: 100%;
  height: 100%;
`

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const ProjectTitle = styled.p`
  display: block;
  font-weight: bold;
  font-size: 1rem;
`
const ProjectDate = styled.p`
  display: block;
  font-weight: bold;
  font-size: 0.8rem;
`

const ProjectBrief = styled.p`
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.5;
`
