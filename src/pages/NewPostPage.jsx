import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import ErrorText from "../components/styled/ErrorText";
import Button from "../components/styled/Button";
import Input from "../components/styled/Input";
import TextArea from "../components/styled/TextArea";
import { PostSchema } from "../schemas/postSchema";
import { insertPost } from "../store/slices/postSlice";
import showNotification from "../utils/notification";

const BlogContainer = styled.div`
  margin-top: 15px;
  border-radius: 7px;
  min-width: 600px;
  background: white;
  padding: 10px 40px 40px 40px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  @media (max-width: 600px) {
    min-width: 500px;
  }
  @media (max-width: 400px) {
    min-width: 320px;
  }
`;

const NewPostPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.user);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PostSchema),
    mode: "onChange",
  });

  const onSubmit = (val) => {
    const isSuccess = dispatch(insertPost(val));
    if (isSuccess) setTimeout(() => history.push("/"), 100);
  };

  useEffect(() => {
    if (user === null) {
      history.push(`/login?redirect=new-post`);
      showNotification("Login", "Please login to create new post", "info");
    }
  }, [user, history]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5vh",
      }}
    >
      <BlogContainer>
        <h1>New Post</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Title</label>
          <Input {...register("title")} autofocus />
          <ErrorText error={errors["title"]} />
          <label>Content</label>
          <TextArea {...register("content")} rows="10"></TextArea>
          <ErrorText error={errors["content"]} />
          <Button
            style={{ margin: "auto", display: "block" }}
            disabled={loading}
          >
            Post
          </Button>
        </form>
      </BlogContainer>
    </div>
  );
};

export default NewPostPage;
