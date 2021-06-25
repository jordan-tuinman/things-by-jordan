import { createGlobalStyle } from "styled-components"

// TODO: add green fuz

export const GlobalStyle = createGlobalStyle`
* {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
`
