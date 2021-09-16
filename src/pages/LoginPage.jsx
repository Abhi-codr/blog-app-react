import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../components/styled/Button";
import Input from "../components/styled/Input";
import { LoginSchema } from "../schemas/userSchema";
import ErrorText from "../components/styled/ErrorText";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/slices/userSlice";
import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";

const LoginContainer = styled.div`
  border-radius: 7px;
  min-width: 400px;
  background: white;
  padding: 40px 40px 80px 40px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  @media (max-width: 400px) {
    min-width: 320px;
  }
`;

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const search = useLocation().search;
  const redirect = new URLSearchParams(search).get("redirect");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: "onChange",
  });

  const { user, loading } = useSelector((state) => state.user);

  const onSubmit = (val) => {
    dispatch(loginUser(val));
  };

  useEffect(() => {
    console.log(user);
    if (user !== null) {
      if (redirect) {
        history.push(`/${redirect}`);
      } else {
        history.push("/");
      }
    }
  }, [user, history, redirect]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10vh",
      }}
    >
      <LoginContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 style={{ textAlign: "center" }}>LOGIN</h1>
          <Input
            placeholder="Email"
            {...register("email")}
            type="email"
            autoFocus
          />
          <ErrorText error={errors["email"]} />
          <Input
            placeholder="Password"
            {...register("password")}
            type="password"
          />
          <ErrorText error={errors["password"]} />
          <div style={{ marginTop: "10px" }}></div>
          <Button
            style={{
              width: "100%",
              display: "block",
              margin: "auto",
            }}
            disabled={loading}
          >
            LOGIN
          </Button>
        </form>
      </LoginContainer>
    </div>
  );
};

export default LoginPage;
