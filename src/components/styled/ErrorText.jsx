import styled from "styled-components";
import React from "react";

const ErrorComponent = styled.p`
  color: #eb4034;
  font-size: 12px;
  margin: 0;
`;

const ErrorText = ({ error }) => {
  return (
    <ErrorComponent>{error && error.message && error.message}</ErrorComponent>
  );
};

export default ErrorText;
