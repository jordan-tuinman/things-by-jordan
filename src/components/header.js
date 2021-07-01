import React, { useState } from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { menuData } from "../data/menuData"

// React icons;
import { HiMenuAlt4 } from "react-icons/hi"
import { CgClose } from "react-icons/cg"

// Components:
import SocialMenu from "./socialMenu"

// Contentful data:
import { useSiteDataQuery } from "../hooks/useSiteDataQuery"

const isBrowser = typeof window !== "undefined"

const Header = () => {
  // Function to check if home page - conditional header:
  const url = typeof window !== "undefined" ? window.location.pathname : ""
  function checkHome() {
    if (url === "/") {
      return (
        <Nav className={navbar ? "navbar active" : "navbar"}>
          <NavLink to="/">
            <Logo
              className={navbar || bool ? "logo active" : "logo"}
              image={siteData.siteLogo.gatsbyImageData}
              alt={siteData.siteLogo.title}
            />
          </NavLink>
          <MenuWrapper>
            <NavMenu>
              {navbar ? (
                menuData.map((item, index) => (
                  <NavLink className="navlink" to={item.link} key={index}>
                    {item.title}
                  </NavLink>
                ))
              ) : (
                <></>
              )}
            </NavMenu>
            {navbar ? <SocialMenu /> : <></>}
          </MenuWrapper>
        </Nav>
      )
    } else {
      return (
        <Nav className={navbar ? "navbar active" : "navbar"}>
          <NavLink to="/">
            <Logo
              className={"logo active"}
              image={siteData.siteLogo.gatsbyImageData}
              alt={siteData.siteLogo.title}
            />
          </NavLink>
          <MenuWrapper>
            <NavMenu>
              {menuData.map((item, index) => (
                <NavLink className="navlink" to={item.link} key={index}>
                  {item.title}
                </NavLink>
              ))}
            </NavMenu>
            <SocialMenu />
          </MenuWrapper>
        </Nav>
      )
    }
  }

  const siteData = useSiteDataQuery()
  const [bool, setBool] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  function toggle() {
    setBool(!bool)
  }

  if (isBrowser) {
    window.addEventListener("scroll", changeNavColor)
    function changeNavColor() {
      if (window.scrollY >= 80) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
  }

  function showSidebar() {
    setSidebar(!sidebar)
  }

  return (
    <>
      <>{checkHome()}</>
      <MobileNav
        onClick={() => {
          showSidebar()
        }}
      >
        {sidebar ? (
          <BurgerMenuClose className={navbar ? "mobile-menu-icons" : ""} />
        ) : (
          <BurgerMenu className={navbar ? "mobile-menu-icons" : ""} />
        )}
        <Sidebar className={sidebar ? "mobile-menu active" : "mobile-menu"}>
          <LinkWrapper>
            <TitleLink to="/">
              <MobileMenuLogo
                image={siteData.siteLogo.gatsbyImageData}
                alt={siteData.siteLogo.title}
              />
            </TitleLink>
            {sidebar ? (
              menuData.map((item, index) => (
                <SideBarLink className="navlink" to={item.link} key={index}>
                  {item.title}
                </SideBarLink>
              ))
            ) : (
              <></>
            )}
          </LinkWrapper>
        </Sidebar>
      </MobileNav>
    </>
  )
}

export default Header

const MobileNav = styled.nav`
  display: none;

  @media screen and (max-width: 480px) {
    position: sticky;
    top: 0;
    background: transparent;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0.5rem 1rem;
    z-index: 90;
  }
`

const Sidebar = styled.div``

const SideBarLink = styled(Link)`
  color: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: right;
  font-size: 1.5rem;
  padding: 1rem 1rem;
  cursor: pointer;
  font-family: "Creepster";
  letter-spacing: 0.2rem;
`

const MobileMenuLogo = styled(GatsbyImage)``

const TitleLink = styled(Link)`
  text-decoration: none;
`

const LinkWrapper = styled.div`
  width: 100%;
  padding-top: 3rem;
`

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: transparent;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 90;

  @media screen and (max-width: 480px) {
    display: none;
  }
`

const MenuWrapper = styled.div`
  display: flex;
  padding-right: 1rem;
`

const NavLink = styled(Link)`
  color: #e6e6e6;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 1.8rem;
  height: 100%;
  cursor: pointer;
  font-family: "Creepster";
  letter-spacing: 0.2rem;
`

const BurgerMenu = styled(HiMenuAlt4)`
  display: block;
  top: 0;
  right: 0;
  font-size: 2.5rem;
  cursor: pointer;
  color: #fff;
`

const BurgerMenuClose = styled(CgClose)`
  display: block;
  top: 0;
  right: 0;
  font-size: 2.5rem;
  cursor: pointer;
  color: #fff;
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
`

const Logo = styled(GatsbyImage)``
