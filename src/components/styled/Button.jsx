import styled from "styled-components";

const Button = styled.button`
  border-radius: 0px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  border: 1px solid #ff416c;
  background-color: #ff416c;
  color: #ffffff;
  font-size: 12px;
  border-radius: 5px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  &:hover {
    transform: scale(0.98);
    border: 1px solid #ff4b2b;
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 12px;
    background-color: #ff4b2b;
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 12px;
  }
  &:disabled {
    border: 1px solid #ff4b2b;
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 12px;
    background-color: #ff4b2b;
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 12px;
  }

  &:active {
    border: 1px solid #ff4b2b;
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 12px;
    background-color: #ff4b2b;
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
