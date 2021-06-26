import React, { useState } from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import { HiMenuAlt4 } from "react-icons/hi"
import { CgClose } from "react-icons/cg"
import { menuData } from "../data/menuData"

// Contentful data:
import { useSiteDataQuery } from "../hooks/useSiteDataQuery"

const Header = () => {
  const siteData = useSiteDataQuery()
  const [bool, setBool] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  function toggle() {
    setBool(!bool)
  }

  window.addEventListener("scroll", changeNavColor)
  function changeNavColor() {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  function showSidebar() {
    setSidebar(!sidebar)
  }

  return (
    <>
      <Nav className={navbar ? "navbar active" : "navbar"}>
        <NavLink to="/">
          <Logo
            className={navbar ? "logo active" : "logo"}
            image={siteData.siteLogo.gatsbyImageData}
            alt={siteData.siteLogo.title}
          />
        </NavLink>
        <MenuWrapper>
          <NavMenu>
            {bool ? (
              menuData.map((item, index) => (
                <NavLink className="navlink" to={item.link} key={index}>
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

      <MobileNav
        onClick={() => {
          showSidebar()
        }}
      >
        {sidebar ? (
          <BurgerMenuClose />
        ) : (
          <BurgerMenu className={navbar ? "mobile-menu-icons" : ""} />
        )}
        <Sidebar className={sidebar ? "mobile-menu active" : "mobile-menu"}>
          <LinkWrapper>
            <TitleLink to="/">
              <MobileMenuTitle>Things by Jordan</MobileMenuTitle>
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

  @media screen and (max-width: 400px) {
    position: sticky;
    top: 0;
    background: transparent;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0.5rem 1rem;
    z-index: 100;
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
  font-family: "Green Fuz";
`

const MobileMenuTitle = styled.h1`
  color: #fff;
  font-family: "Green Fuz";
  font-size: 2rem;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 3rem;
  letter-spacing: 0.1rem;
`
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
  z-index: 100;

  @media screen and (max-width: 400px) {
    display: none;
  }
`

const MenuWrapper = styled.div`
  display: flex;
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
  font-family: "Green Fuz";
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
