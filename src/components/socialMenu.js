import React from "react"
import styled from "styled-components"

//  React Icons:
import { MdEmail } from "react-icons/md"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

// TODO: adjust icon size and colors

const SocialMenu = () => {
  return (
    <Menu>
      <SocialIcon target="_blank" href="https://github.com/jordan-tuinman">
        <FaGithub />
      </SocialIcon>
      {/* <SocialIcon target="_blank" href="https://www.instagram.com/jordantuna/">
        <FaInstagram />
      </SocialIcon> */}
      <SocialIcon
        target="_blank"
        href="https://www.linkedin.com/in/jordan-tuinman/"
      >
        <FaLinkedin />
      </SocialIcon>
      <SocialIcon href="mailto:thingsbyjordan@gmail.com">
        <MdEmail />
      </SocialIcon>
    </Menu>
  )
}

export default SocialMenu

const Menu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const SocialIcon = styled.a`
  padding: 0 0.5rem;
  color: #e6e6e6;
  transition: 0.3s !important;

  &:hover {
    color: #fff;
    transform: translateY(-2px);
  }
`
