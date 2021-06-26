import { createGlobalStyle } from "styled-components"

// TODO: add green fuz

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Green Fuz';
  src: local('Green Fuz'), url(../../fonts/green-fuz.ttf) format('truetype');
}

body {
  background-color: #0c0c0c ;

}

* {
  font-family: 'Roboto Condensed', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.greenfuz {
  font-family: 'Green Fuz';
  color: #1A1A1A;
  letter-spacing: .1rem;
}

.navbar.active {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.8) 100%
  )
}

.logo {
  display: none;
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
}

.navlink:active {
  color: #fff;
  text-decoration: underline;
}

.tech:hover {
  transition: 0.3s !important;
  transform: translateY(-4px);
  cursor: pointer;
}

.mobileNav {
  color: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
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

`
