import styled from "styled-components"
import { Link } from "gatsby"

//Note: using a function like below created an attribute to toggle in the component

// TODO: change colors for button

const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#0c0c0c" : "#077BF1")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: #fff;
  min-width: 100px;
  cursor: pointer;
  text-direction: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "6px" : "none")};

  &:hover {
    background: ${({ primary }) => (primary ? "#1a1a1a" : "#F26A2E")};
    transform: translateY(-2px);
  }
`

export default Button
