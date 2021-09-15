import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  color: white;
`;

const NavContainer = styled.div`
  /* max-width: 1000px;
  margin: 0 auto; */
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20%;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.1em;
  transition: 0.1s ease;
  &:hover {
    font-weight: bold;
    font-size: 1.2em;
  }
`;

const NavBrand = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Header = () => {
  return (
    <Nav>
      <NavContainer className="container">
        <NavBrand to="/">
          <h2>Blog App</h2>
        </NavBrand>
        <NavLinksContainer>
          <NavLink to="/">Blogs</NavLink>
          <NavLink to="/login">Login</NavLink>
        </NavLinksContainer>
      </NavContainer>
    </Nav>
  );
};

export default Header;
