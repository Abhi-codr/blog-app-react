import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import ErrorText from "../components/styled/ErrorText";
import Button from "../components/styled/Button";
import Input from "../components/styled/Input";
import TextArea from "../components/styled/TextArea";
import { PostSchema } from "../schemas/postSchema";
import { getPost, updatePost } from "../store/slices/postSlice";
import showNotification from "../utils/notification";

const BlogContainer = styled.div`
  margin-top: 15px;
  border-radius: 7px;
  min-width: 650px;
  background: white;
  padding: 10px 40px 40px 40px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  @media (max-width: 650px) {
    min-width: 600px;
  }
  @media (max-width: 600px) {
    min-width: 500px;
  }
  @media (max-width: 400px) {
    min-width: 320px;
  }
`;

const EditPostPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, post } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.user);
  const param = useParams();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PostSchema),
    mode: "onChange",
  });

  const onSubmit = (val) => {
    dispatch(updatePost({ data: val, id: param.id }));
  };

  useEffect(() => {
    if (user === null) {
      history.push(`/login?redirect=edit-page/${param.id}`);
      showNotification("Login", "Please login to create new post", "info");
    }
  }, [user, history, param]);

  useEffect(() => {
    dispatch(getPost(param.id));
  }, [dispatch, param]);

  useEffect(() => {
    if (post) {
      setValue("title", post.title.toUpperCase());
      setValue("content", post.content);
    }
  }, [post, setValue]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5vh",
      }}
    >
      <BlogContainer>
        <h1>Edit Post</h1>
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
            Update
          </Button>
        </form>
      </BlogContainer>
    </div>
  );
};

export default EditPostPage;
