import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./styled/Button";

const Item = styled.li``;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0 10px 0 10px;
  font-size: 1.1em;
  transition: 0.1s ease;
  &:hover {
    font-weight: bold;
    font-size: 1.2em;
  }
`;

const Centered = styled.div`
  display: ${(props) => !props.isOverlay && "flex"};
  align-items: ${(props) => !props.isOverlay && "center"};
  align-content: ${(props) => !props.isOverlay && "space-space-around"};
`;

const NavbarItems = ({ onClick, user, isOverlay = false }) => {
  return (
    <>
      <Item>
        <NavLink to="/">Blogs</NavLink>
      </Item>
      <Item>
        <NavLink to="/new-post">New Post</NavLink>
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
            <NavLink to="/login">Login</NavLink>
          </Item>
          <Item>
            <NavLink to="/register">Register</NavLink>
          </Item>
        </>
      )}
    </>
  );
};

export default NavbarItems;
