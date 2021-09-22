import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "./styled/Button";

const Item = styled.li``;

const NavBarLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding: 0 10px 0 10px;
  font-size: 1.1em;
  transition: 0.1s ease;
  &:hover {
    font-weight: bold;
    font-size: 1.2em;
  }
  &.${(props) => props.activeClassName} {
    font-weight: bold;
    font-size: 1.2em;
  }
`;

const Centered = styled.div`
  display: ${(props) => !props.isOverlay && "flex"};
  align-items: ${(props) => !props.isOverlay && "center"};
  align-content: ${(props) => !props.isOverlay && "space-space-around"};
`;

const NavbarItems = ({ onClick, user, isOverlay = false, toggleNav }) => {
  return (
    <>
      <Item>
        <NavBarLink
          onClick={() => toggleNav(false)}
          activeClassName="active"
          to="/"
          exact={true}
        >
          Blogs
        </NavBarLink>
      </Item>
      <Item>
        <NavBarLink
          onClick={() => toggleNav(false)}
          activeClassName="active"
          to="/new-post"
        >
          New Post
        </NavBarLink>
      </Item>
      {user ? (
        <Centered isOverlay={isOverlay}>
          <Item>
            <div
              style={{
                padding: "5px",
                border: "2px solid #ffffff",
                margin: "5px",
                color: "white",
              }}
            >
              Hello, <strong>{user.name}</strong>
            </div>
          </Item>
          <Item>
            <Button onClick={onClick}>Logout</Button>
          </Item>
        </Centered>
      ) : (
        <>
          <Item>
            <NavBarLink
              onClick={() => toggleNav(false)}
              activeClassName="active"
              to="/login"
            >
              Login
            </NavBarLink>
          </Item>
          <Item>
            <NavBarLink
              onClick={() => toggleNav(false)}
              activeClassName="active"
              to="/register"
            >
              Register
            </NavBarLink>
          </Item>
        </>
      )}
    </>
  );
};

export default NavbarItems;
