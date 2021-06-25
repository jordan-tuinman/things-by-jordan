import { createGlobalStyle } from "styled-components"

// TODO: add green fuz

export const GlobalStyle = createGlobalStyle`
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
`
