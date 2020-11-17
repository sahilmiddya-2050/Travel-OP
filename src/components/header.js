import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenueData"
import { Button } from "./Button"

// Styles
const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  z-index: 100;
  position: relative;
`
const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: #ffffff;
  z-index: 101;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-75%, -50%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavButton = styled.div``

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">TravellOP</NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item, index) => {
          return (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          )
        })}
        <NavButton>
          <Button primary={true} round>
            Book a Trip
          </Button>
        </NavButton>
      </NavMenu>
    </Nav>
  )
}
export default Header
