import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../components/styled/Button";
import Input from "../components/styled/Input";
import { RegisterSchema } from "../schemas/userSchema";
import ErrorText from "../components/styled/ErrorText";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/slices/userSlice";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const RegisterContainer = styled.div`
  border-radius: 7px;
  min-width: 400px;
  background: white;
  padding: 40px 40px 80px 40px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  @media (max-width: 400px) {
    min-width: 320px;
  }
`;

const RegisterPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
    mode: "onChange",
  });

  const { registerSuccess, loading } = useSelector((state) => state.user);

  const onSubmit = (val) => {
    dispatch(registerUser(val));
  };

  useEffect(() => {
    if (registerSuccess) {
      history.push("/login");
    }
  }, [registerSuccess, history]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10vh",
      }}
    >
      <RegisterContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 style={{ textAlign: "center" }}>REGISTER</h1>
          <Input placeholder="Name" {...register("name")} autoFocus />
          <ErrorText error={errors["name"]} />
          <Input placeholder="Email" {...register("email")} type="email" />
          <ErrorText error={errors["email"]} />
          <Input
            placeholder="Password"
            {...register("password")}
            type="password"
          />
          <ErrorText error={errors["password"]} />
          <Input
            placeholder="Confirm Password"
            {...register("c_password")}
            type="password"
          />
          <ErrorText error={errors["c_password"]} />
          <div style={{ marginTop: "10px" }}></div>
          <Button
            disabled={loading}
            style={{
              width: "100%",
              display: "block",
              margin: "auto",
            }}
          >
            Register
          </Button>
        </form>
      </RegisterContainer>
    </div>
  );
};

export default RegisterPage;
