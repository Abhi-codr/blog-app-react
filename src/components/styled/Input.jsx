import styled from "styled-components";

const Input = styled.input`
  /* background-color: rgba(238, 238, 238, 0.35); */
  border: none;
  border: 2px solid #ff416c;
  border-radius: 5px;
  outline: none;
  padding: 12px 15px;
  margin: 10px 0;
  width: 100%;

  &:hover {
  }
  &:active {
    border: 2.5px solid #ff416c;
  }
  &:focus {
    border: 2.5px solid #ff416c;
  }
`;

export default Input;
