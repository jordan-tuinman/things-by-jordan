import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import { HiMenuAlt4 } from "react-icons/hi"
import { menuData } from "../data/menuData"

// Components:
import SocialMenu from "./socialMenu"

// Contentful data:
import { useSiteDataQuery } from "../hooks/useSiteDataQuery"

// TODO: restyle header to be only menu burger, open on click, close on click

const Header = () => {
  const siteData = useSiteDataQuery()
  return (
    <Nav>
      <NavLink to="/">
        {/* <StaticImage
          src="../images/tbj-logo.png"
          width={200}
          quality={95}
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="thingsbyjordan-logo"
          style={{ marginBottom: `1.45rem` }}
        /> */}
        {siteData.siteTitle}
      </NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavMenu>
        <SocialMenu />
      </NavMenu>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`
const Bars = styled(HiMenuAlt4)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
