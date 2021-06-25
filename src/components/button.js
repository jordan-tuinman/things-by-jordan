import styled from "styled-components"
import { Link } from "gatsby"

//Note: using a function like below created an attribute to toggle in the component

const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#1A1A1A" : "transparent")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: ${({ primary }) => (primary ? "#fff" : "#e6e6e6")};
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  min-width: 100px;
  cursor: pointer;
  text-direction: none;
  transition: 0.3s !important;
  border: 1px solid #1a1a1a;
  border-radius: ${({ round }) => (round ? "5px" : "none")};
  text-decoration: none;

  &:hover {
    background: ${({ primary }) => (primary ? "#fcfcfc" : "transparent")};
    color: ${({ primary }) => (primary ? "#1A1A1A" : "#fff")};
    transform: translateY(-2px);
  }
`

export default Button
