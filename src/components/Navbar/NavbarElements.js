import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

// Colors: #0E3B43, #7E846B, #F5FBEF

export const Nav = styled.nav`
    background: transparent;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  color: #081617;
  font-size: 2rem;
  text-decoration: none;
  padding: 1em;
  font-family: 'Helvetica', sans-serif;
`;

export const NavLink = styled(Link)`
color: #081617;
display: flex;
align-items: center;
text-align: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&:hover {
  color: #B7990D;
}
font-weight: bold;
`;

export const HamburgerBars = styled(FaBars)`
  display: none;
  color: #FFFDFD;
  @media screen and (max-width: 768px) {
    display: block;
    margin-right: auto;
    margin-left: auto;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #D8A48F;
  outline: none;
  border: 1px solid #0E3B43;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0E3B43;
    color: #808080;
  }
`;