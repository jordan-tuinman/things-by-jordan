import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

// Redux:
import { useSelector } from "react-redux"

//  React Icons:
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa"

// Components:
import Layout from "../components/layout"
import Seo from "../components/seo"
import WorkModal from "../components/workModal"

// Contentful data:
import { useWorkDataQuery } from "../hooks/useWorkDataQuery"

const WorkPage = () => {
  const workData = useWorkDataQuery()

  const [selected, setSelected] = useState(useSelector(state => state.link))
  const [projectId, setProjectId] = useState(0)
  useEffect(() => {
    if (selected > 0) {
      setProjectId(selected)
      setSelectedProject(selected)
    }
  }, [selected])

  const [selectedImage, setSelectedImage] = useState()
  const [selectedProject, setSelectedProject] = useState(projectId)

  function displayInfo(num) {
    setProjectId(num)
    setSelectedProject(num)
  }

  function openModal(index) {
    const modal = document.getElementById("myModal")
    modal.style.display = "block"
    setSelectedImage(index)
  }

  return (
    <Layout>
      <Seo title="Work" />
      <WorkContainer>
        <WorkHeading className="creepster">Work Things</WorkHeading>
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
            <LinksWrap>
              {workData[projectId].node.projectLink ? (
                <ProjectLinks
                  target="_blank"
                  href={workData[projectId].node.projectLink}
                >
                  <FaExternalLinkSquareAlt />
                  <p>{workData[projectId].node.nameOfProject}</p>
                </ProjectLinks>
              ) : (
                <></>
              )}
              {workData[projectId].node.gitHubLink ? (
                <ProjectLinks
                  target="_blank"
                  href={workData[projectId].node.gitHubLink}
                >
                  <FaGithub />
                  <p>GitHub repo</p>
                </ProjectLinks>
              ) : (
                <></>
              )}
            </LinksWrap>
            <ImagesWrapper>
              {workData[projectId].node.projectImages.map((item, i) => (
                <ProjectImage
                  key={i}
                  image={
                    workData[projectId].node.projectImages[i].gatsbyImageData
                  }
                  alt={workData[projectId].node.projectImages[i].title}
                  onClick={() => {
                    openModal(i)
                  }}
                />
              ))}
            </ImagesWrapper>
            <Text
              dangerouslySetInnerHTML={{
                __html: `${workData[projectId].node.projectDescription.childMarkdownRemark.html}`,
              }}
            />
          </ColumnTwo>
        </ContentWrapper>
      </WorkContainer>
      <MobileContainer>
        <WorkHeading className="creepster">Work Things</WorkHeading>
        <ColumnOne>
          {workData.map((item, index) => (
            <Wrapper key={index}>
              <ProjectRow key={item.node.contentfulid}>
                <ProjectCard
                  onClick={() => {
                    displayInfo(index)
                  }}
                >
                  <TextWrap>
                    <TitleWrap
                      id={workData[projectId].node.nameOfProject}
                      href={`#${workData[projectId].node.nameOfProject}`}
                    >
                      <ProjectTitle>{item.node.nameOfProject}</ProjectTitle>
                      <ProjectDate>{item.node.projectDate}</ProjectDate>
                    </TitleWrap>
                    <ProjectBrief>{item.node.projectBrief}</ProjectBrief>
                  </TextWrap>
                </ProjectCard>
              </ProjectRow>
              {projectId === index ? (
                <>
                  <InfoWrap>
                    <h2>{workData[projectId].node.nameOfProject}</h2>
                    <LinksWrap>
                      {workData[projectId].node.projectLink ? (
                        <ProjectLinks
                          target="_blank"
                          href={workData[projectId].node.projectLink}
                        >
                          <FaExternalLinkSquareAlt />
                          <p>{workData[projectId].node.nameOfProject}</p>
                        </ProjectLinks>
                      ) : (
                        <></>
                      )}
                      {workData[projectId].node.gitHubLink ? (
                        <ProjectLinks
                          target="_blank"
                          href={workData[projectId].node.gitHubLink}
                        >
                          <FaGithub />
                          <p>GitHub repo</p>
                        </ProjectLinks>
                      ) : (
                        <></>
                      )}
                    </LinksWrap>
                    <ImagesWrapper>
                      {workData[projectId].node.projectImages.map((item, i) => (
                        <ProjectImage
                          key={i}
                          image={
                            workData[projectId].node.projectImages[i]
                              .gatsbyImageData
                          }
                          alt={workData[projectId].node.projectImages[i].title}
                          onClick={() => {
                            openModal(i)
                          }}
                        />
                      ))}
                    </ImagesWrapper>
                    <Text
                      dangerouslySetInnerHTML={{
                        __html: `${workData[projectId].node.projectDescription.childMarkdownRemark.html}`,
                      }}
                    />
                  </InfoWrap>
                </>
              ) : (
                <></>
              )}
            </Wrapper>
          ))}
        </ColumnOne>
      </MobileContainer>
      <WorkModal
        selectedImage={selectedImage}
        selectedProject={selectedProject}
      />
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

const Wrapper = styled.div`
  width: 100%;
`

const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 1rem;
  width: 100%;
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
    color: #1a1a1a;
    cursor: pointer;
    transition: 0.3s !important;
  }

  p {
    padding-left: 1rem;
    padding-right: 1.5rem;
  }
`

const WorkHeading = styled.p`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;

  @media screen and (max-width: 480px) {
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
  padding-top: 2rem;
  width: 100%;

  p {
    padding: 0 0.5rem;
  }

  &:hover {
    color: #000;
    transform: translateY(-2px);
  }
`

const TitleWrap = styled.a`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  text-decoration: none;
  color: inherit;
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
  padding-bottom: 2rem;

  a {
    color: inherit;
  }
`

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5px;
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

  @media screen and (max-width: 1050px) {
    filter: brightness(100%);
  }
`
const LinksWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

const ProjectLinks = styled.a`
  display: flex;
  align-items: center;
  color: #1a1a1a;
  cursor: pointer;
  transition: 0.3s !important;
  padding-top: 0.5rem;
  text-decoration: none;
`
