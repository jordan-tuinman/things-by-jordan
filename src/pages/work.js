import React, { useState } from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

//  React Icons:
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa"

// Components:
import Layout from "../components/layout"
import WorkModal from "../components/workModal"

// Contentful data:
import { useWorkDataQuery } from "../hooks/useWorkDataQuery"

// TODO: apply modal to images

const WorkPage = ({ location }) => {
  const workData = useWorkDataQuery()
  const [content, setModalContent] = useState()
  // const [mobilePid, setMobilePid] = useState(0)
  const [projectId, setProjectId] = useState(
    !isNaN(`${location.state.projectIndex}`)
      ? `${location.state.projectIndex}`
      : 0
  )

  function displayInfo(num) {
    setProjectId(num)
    // setMobilePid(num)
  }

  function openModal(content) {
    const modal = document.getElementById("myModal")
    modal.style.display = "block"
    setModalContent(content)
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
                  <TextWrap>
                    <TitleWrap>
                      <ProjectTitle>{item.node.nameOfProject}</ProjectTitle>
                      <ProjectDate>{item.node.projectDate}</ProjectDate>
                    </TitleWrap>
                    <ProjectBrief>{item.node.projectBrief}</ProjectBrief>
                  </TextWrap>
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
                  onClick={() => {
                    openModal(workData[projectId].node.projectImages[i])
                  }}
                />
              ))}
            </ImagesWrapper>
          </ColumnTwo>
        </ContentWrapper>
      </WorkContainer>
      <MobileContainer>
        <WorkHeading className="greenfuz">Work Things</WorkHeading>
        <ColumnOne>
          {workData.map((item, index) => (
            <>
              <ProjectRow key={item.node.contentfulid}>
                <ProjectCard
                  onClick={() => {
                    displayInfo(index)
                  }}
                >
                  <TextWrap>
                    <TitleWrap>
                      <ProjectTitle>{item.node.nameOfProject}</ProjectTitle>
                      <ProjectDate>{item.node.projectDate}</ProjectDate>
                    </TitleWrap>
                    <ProjectBrief>{item.node.projectBrief}</ProjectBrief>
                  </TextWrap>
                </ProjectCard>
              </ProjectRow>
              {/* TODO: Potential issue here - need to confirm on build version first before change. 
              To resolve, switch projectId for another state variable eg create a mobileId 
              state and set with the same num as projectId */}
              {projectId === index ? (
                <InfoWrap>
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
                          workData[projectId].node.projectImages[i]
                            .gatsbyImageData
                        }
                        alt={workData[projectId].node.projectImages[i].title}
                        onClick={() => {
                          openModal(workData[projectId].node.projectImages[i])
                        }}
                      />
                    ))}
                  </ImagesWrapper>
                </InfoWrap>
              ) : (
                <></>
              )}
            </>
          ))}
        </ColumnOne>
      </MobileContainer>
      <WorkModal modalContent={content} />
    </Layout>
  )
}

export default WorkPage

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 1050px) {
    display: none;
  }
`

const MobileContainer = styled.div`
  display: none;

  @media screen and (max-width: 1050px) {
    background: #fcfcfc;
    color: #000;
    padding: 3rem calc((100vw - 1300px) / 2);
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-gap: 15px;
  padding: 0 4rem;

  @media screen and (max-width: 1050px) {
    grid-template-columns: 25% 75%;
  }
`

const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 1rem;
`

const ProjectRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 0.1rem 0;
  color: #e6e6e6;
  transition: 0.3s !important;

  &:hover {
    transform: translateX(4px);
    cursor: pointer;
    color: #fff;
  }
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
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;

  @media screen and (max-width: 400px) {
    margin-bottom: 1rem;
  }
`

const ProjectCard = styled.div`
  width: 100%;
  line-height: 1.5;
  transition: 0.2s ease;
  background: #fcfcfc;
`

const TextWrap = styled.div`
  background-color: #1a1a1a;
  padding: 0.5rem 1rem;
  width: 100%;
`

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fcfcfc;
  padding: 1rem 1rem;
  width: 100%;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #1a1a1a;
    cursor: pointer;
    transition: 0.3s !important;
    padding-top: 0.5rem;
  }

  p {
    padding: 0 0.5rem;
  }

  &:hover {
    color: #000;
    transform: translateY(-2px);
  }
`

const TitleWrap = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;
`

const ProjectTitle = styled.p`
  display: block;
  font-weight: bold;
  font-size: 1rem;
  padding-bottom: 0.5rem;
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
  width: 24%;
  filter: brightness(60%);
  transition: 0.3s !important;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(100%);
    cursor: pointer;
  }
`
