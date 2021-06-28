import React, { useState } from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

//  React Icons:
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa"

// Components:
import Layout from "../components/layout"

// Contentful data:
import { useWorkDataQuery } from "../hooks/useWorkDataQuery"

const WorkPage = () => {
  const workData = useWorkDataQuery()
  const [projectId, setProjectId] = useState(0)

  function displayInfo(num) {
    console.log(num)
    setProjectId(num)
  }

  return (
    <Layout>
      <WorkContainer>
        <WorkHeading className="greenfuz">Work Things</WorkHeading>
        <ContentWrapper>
          <ColumnOne>
            {workData.map((item, index) => (
              <ProjectRow key={item.node.contentfulid}>
                <ProjectCard
                  onClick={() => {
                    displayInfo(index)
                  }}
                >
                  <ThumbnailImage
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
              </ProjectRow>
            ))}
          </ColumnOne>
          <ColumnTwo>
            <h2>{workData[projectId].node.nameOfProject}</h2>
            {workData[projectId].node.projectLink ? (
              <a href={workData[projectId].node.projectLink}>
                <FaExternalLinkSquareAlt />
                <p>{workData[projectId].node.nameOfProject}</p>
              </a>
            ) : (
              <></>
            )}
            {workData[projectId].node.gitHubLink ? (
              <a href={workData[projectId].node.gitHubLink}>
                <FaGithub />
                <p>GitHub repo</p>
              </a>
            ) : (
              <></>
            )}

            <Text
              dangerouslySetInnerHTML={{
                __html: `${workData[projectId].node.projectDescription.childMarkdownRemark.html}`,
              }}
            />
            <ImagesWrapper>
              {workData[projectId].node.projectImages.map((item, i) => (
                <ProjectImage
                  image={
                    workData[projectId].node.projectImages[i].gatsbyImageData
                  }
                  alt={workData[projectId].node.projectImages[i].title}
                />
              ))}
            </ImagesWrapper>
          </ColumnTwo>
        </ContentWrapper>
      </WorkContainer>
    </Layout>
  )
}

export default WorkPage

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 3rem calc((100vw - 1300px) / 2);
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-gap: 15px;
  padding: 0 4rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 400px) {
    padding: 0 2rem;
  }
`

const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 1rem;
`

const ProjectRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem 1rem;

  h2 {
    padding-bottom: 1rem;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #1a1a1a;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s !important;

    p {
      padding-left: 1rem;
    }

    &:hover {
      color: #000;
      transform: translateY(-2px);
    }
  }
`

const WorkHeading = styled.p`
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;

  @media screen and (max-width: 400px) {
    margin-bottom: 2rem;
  }
`

const ProjectCard = styled.div`
  line-height: 1.5;
  height: 200px;
  position: relative;
  transition: 0.2s ease;
  background: #fcfcfc;
`

const ThumbnailImage = styled(GatsbyImage)`
  height: 100%;
  max-width: 100%;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const ProjectInfo = styled.div`
  position: absolute;
  top: 140px;
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

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 2;
  padding-top: 1.5rem;

  a {
    color: inherit;
  }
`

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 0;
`

const ProjectImage = styled(GatsbyImage)`
  width: 20%;
  filter: brightness(60%);
  transition: 0.3s !important;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(100%);
  }
`

// const LinkIcon = styled(FaExternalLinkSquareAlt)`
//   color: inherit;
//   align-items: center;
//   padding-right: 1rem;
// `

// const GitHub = styled(FaGithub)`
//   color: inherit;
//   align-items: center;
//   padding-right: 1rem;
// `
