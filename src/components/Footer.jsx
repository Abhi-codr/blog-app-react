import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 50px;
  background-color: black;
  display: flex;
  margin-top: 30px;
  position: absolute;
  width: 100%;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

const StyledA = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    color: #ff416a;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledA href="https://github.com/Abhi-codr" target="_blank">
        By Abhilash Bharathi
      </StyledA>
    </StyledFooter>
  );
};

export default Footer;
