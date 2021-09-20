import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userActions } from "../store/slices/userSlice";
import NavbarItems from "./NavbarItems";

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  background: linear-gradient(to right, #ff4b2b, #ff416c);
`;

const NavContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const NavBrand = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  align-content: space-space-around;
  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "90vh" : 0)};
  width: 100vw;
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  transition: height 0.4s ease-in-out;
  z-index: 9999;
  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 45%;
  top: 45%;
  z-index: 9999;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const NavBar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(userActions.logoutUser());
  };
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav>
        <NavContainer className="container">
          <NavBrand to="/">
            <h2>Blog App</h2>
          </NavBrand>
          <Menu>
            <NavbarItems user={user} onClick={onClick} />
          </Menu>
          <NavIcon onClick={() => toggleNav(!toggle)}>
            <Line open={toggle} />
            <Line open={toggle} />
            <Line open={toggle} />
          </NavIcon>
        </NavContainer>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <NavbarItems user={user} onClick={onClick} isOverlay={true} />
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default NavBar;
