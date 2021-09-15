import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import Button from "../components/styled/Button";
import Input from "../components/styled/Input";
import TextArea from "../components/styled/TextArea";
import { getPost } from "../store/slices/postSlice";

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
  const { loading } = useSelector((state) => state.posts);
  const param = useParams();
  const getBlog = async () => {
    dispatch(getPost(param.id));
  };

  useEffect(() => {
    getBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BlogContainer>
        <h1>New Post</h1>
        <label>Title</label>
        <Input />
        <label>Content</label>
        <TextArea rows="10"></TextArea>
        <Button style={{ margin: "auto", display: "block" }}>Post</Button>
      </BlogContainer>
    </div>
  );
};

export default NewPostPage;
