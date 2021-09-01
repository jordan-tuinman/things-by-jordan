import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

body {
  background-color: #0c0c0c ;
  position: relative;
  min-height: 100vh;
  padding-bottom: 200px;
}

* {
  font-family: 'Roboto Condensed', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.creepster {
  font-family: 'Creepster';
  font-weight: 400;
  color: #1A1A1A;
  letter-spacing: .25rem;
}

.navbar.active {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.8) 100%
  )
}

.logo.active {
  display: block;
  width: 150px;
}

.blackAndWhite {
  filter: grayscale(60%);
}
.blackAndWhite:hover {
  filter: none;
}

.navlink:hover {
  color: #fff;
  text-decoration: underline;
}

.navlink:active {
  color: #fff;
  
}

.tech:hover {
  filter: none;
  transform: scale(1.5);
}

.mobileNav {
  color: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 90;
}

.menu-bars {
  display: block;
  top: 0;
  right: 0;
  font-size: 2rem;
  cursor: pointer;
  color: #fff;
}

.mobile-menu {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );  
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: start;
  position: fixed;
  top: 0;
  padding-top: 2.5rem;
  right: -100%;
  transition: 850ms;
}

.mobile-menu.active {
  right: 0;
  transition: 350ms;
}

.mobile-menu-icons {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );  
}

.slider {
  display: flex;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.slider-image {
  width: 90%;
}

.right-arrow {
  position: absolute;
  right: 1.4%;
  font-size: 2.5rem;
  color: #fff;
  opacity: 0.7;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  padding: 0.5rem 0.5rem 0 0.5rem;

  &:hover {
    text-decoration: none;
    cursor: pointer;
    opacity: 1;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
}

.left-arrow {
  position: absolute;
  left: 1.4%;
  font-size: 2.5rem;
  color: #fff;
  opacity: 0.7;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  padding: 0.5rem 0.5rem 0 0.5rem;

  &:hover {
    text-decoration: none;
    cursor: pointer;
    opacity: 1;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
}

.slide {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition-duration: 1s ease; 
}

.slide.active { 
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition-duration: 1s; 
  transform: scale(1.08);
}

`
