import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userActions } from "../store/slices/userSlice";
import Button from "./styled/Button";

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
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
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
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(userActions.logoutUser());
  };
  return (
    <Nav>
      <NavContainer className="container">
        <NavBrand to="/">
          <h2>Blog App</h2>
        </NavBrand>
        <NavLinksContainer>
          <div style={{ padding: "5px", border: "2px solid #ffffff" }}>
            Hello, <strong>{user.name}</strong>
          </div>
          <NavLink to="/">Blogs</NavLink>
          <NavLink to="/new-post">New Post</NavLink>
          {user ? (
            <Button onClick={onClick}>Logout</Button>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </NavLinksContainer>
      </NavContainer>
    </Nav>
  );
};

export default Header;
