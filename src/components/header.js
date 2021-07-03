import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
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
  const url = typeof window !== "undefined" ? window.location.pathname : ""

  const siteData = useSiteDataQuery()
  const [navbar, setNavbar] = useState(false)
  const [bool, setBool] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  function toggle() {
    setBool(!bool)
  }

  useEffect(() => {
    if (url !== "/") {
      setNavbar(true)
      setBool(true)
    }
  }, [url])

  if (isBrowser) {
    window.addEventListener("scroll", changeNavColor)
    function changeNavColor() {
      if (window.pageYOffset >= 100) {
        return null
      } else if (window.pageYOffset >= 50) {
        showMenu()
      } else {
        closeMenu()
      }
    }
  }

  function showMenu() {
    if (navbar || bool == false) {
      setNavbar(true)
      setBool(true)
    }
  }

  function closeMenu() {
    if (url === "/") {
      setNavbar(false)
      setBool(false)
    } else {
      return null
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
            className={navbar || bool ? "logo active" : "logo"}
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
          {bool ? <SocialMenu /> : <></>}
          <NavMenu
            onClick={() => {
              toggle()
            }}
          >
            {bool ? <BurgerMenuClose /> : <BurgerMenu />}
          </NavMenu>
        </MenuWrapper>
      </Nav>
      {url === "/" ? (
        <></>
      ) : (
        <MobileBanner>
          <NavLink to="/">
            <Logo
              className={navbar || bool ? "logo active" : "logo"}
              image={siteData.siteLogo.gatsbyImageData}
              alt={siteData.siteLogo.title}
            />
          </NavLink>
        </MobileBanner>
      )}
      <MobileNav
        onClick={() => {
          showSidebar()
        }}
      >
        {sidebar ? (
          <MobileNavMenu
            onClick={() => {
              showSidebar()
            }}
          >
            <BurgerMenuClose className={navbar ? "mobile-menu-icons" : ""} />
          </MobileNavMenu>
        ) : (
          <MobileNavMenu
            onClick={() => {
              showSidebar()
            }}
          >
            <BurgerMenu className={navbar ? "mobile-menu-icons" : ""} />
          </MobileNavMenu>
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

const MobileBanner = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    position: absolute;
    top: 0;
    background: "transparent";
    height: 100px;
    width: 100%;
    display: flex;
    z-index: 90;
  }
`

const MobileNav = styled.nav`
  display: none;

  @media screen and (max-width: 480px) {
    position: sticky;
    top: 0;
    margin-left: 80%;
    background: "transparent";
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0.5rem 1rem;
    z-index: 90;
    width: 20%;
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
  z-index: 100;
`

const BurgerMenuClose = styled(CgClose)`
  display: block;
  top: 0;
  right: 0;
  font-size: 2.5rem;
  cursor: pointer;
  color: #fff;
  z-index: 100;
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
`

const MobileNavMenu = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled(GatsbyImage)`
  display: none;
`
