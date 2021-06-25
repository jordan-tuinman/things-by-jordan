import React, { useState } from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import { HiMenuAlt4 } from "react-icons/hi"
import { CgClose } from "react-icons/cg"
import { menuData } from "../data/menuData"

// Components:
import SocialMenu from "./socialMenu"

// Contentful data:
import { useSiteDataQuery } from "../hooks/useSiteDataQuery"

// TODO: restyle header to be only menu burger, open on click, close on click

const Header = () => {
  const siteData = useSiteDataQuery()
  const [bool, setBool] = useState(false)

  function toggle() {
    console.log(bool)
    setBool(!bool)
  }

  return (
    <>
      <Nav>
        <NavLink to="/">
          <Logo
            image={siteData.siteLogo.gatsbyImageData}
            alt={siteData.siteLogo.title}
          />
        </NavLink>
        <MenuWrapper>
          <NavMenu>
            {bool ? (
              menuData.map((item, index) => (
                <NavLink to={item.link} key={index}>
                  {item.title}
                </NavLink>
              ))
            ) : (
              <></>
            )}
          </NavMenu>
          <NavMenu
            onClick={() => {
              toggle()
            }}
          >
            {bool ? <BurgerMenuClose /> : <BurgerMenu />}
          </NavMenu>
        </MenuWrapper>
      </Nav>
    </>
  )
}

export default Header

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: transparent;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
`

const MenuWrapper = styled.div`
  display: flex;
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

const BurgerMenu = styled(HiMenuAlt4)`
  display: block;
  top: 0;
  right: 0;
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;
`

const BurgerMenuClose = styled(CgClose)`
  display: block;
  top: 0;
  right: 0;
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
`

const Logo = styled(GatsbyImage)`
  width: 160px;
`
