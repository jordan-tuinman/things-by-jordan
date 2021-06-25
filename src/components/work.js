import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

// Contentful data:
import { useWorkDataQuery } from "../hooks/useWorkDataQuery"

// TODO: add dynamically created links to project cards

const Work = ({ heading }) => {
  const workData = useWorkDataQuery()
  const recentWork = workData.slice(0, 4) // 3 showcases on landing page

  return (
    <WorkContainer>
      <WorkHeading>{heading}</WorkHeading>
      <WorkWrapper>
        {recentWork.map((item, index) => (
          <ProjectCard key={index}>
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
        ))}
      </WorkWrapper>
    </WorkContainer>
  )
}

export default Work

const WorkContainer = styled.div`
  min-height: 60vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #f5f5f5;
  color: #000;
`

const WorkHeading = styled.div`
  font-weight: 400;
  font-size: clamp(1.25rem, 3vw, 2rem);
  text-align: center;
  margin-bottom: 3rem;
  color: #000;
`

const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
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
  height: 83%;
  max-width: 100%;
  position: relative;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
    cursor: pointer;
  }
`

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  top: 250px;
  width: 100%;
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
