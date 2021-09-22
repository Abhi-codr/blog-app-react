import React from "react";
import ErrorText from "./styled/ErrorText";
import Input from "./styled/Input";

const InputGroup = ({ register, errors, label, name }) => {
  return (
    <>
      <label>{label}</label>
      <Input {...register(name)} autofocus />
      <ErrorText error={errors[name]} />
    </>
  );
};

export default InputGroup;
