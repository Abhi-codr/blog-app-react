import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../components/Spinners";
import Button from "../components/styled/Button";
import { deletePost, getPost } from "../store/slices/postSlice";

const BlogContainer = styled.div`
  margin-top: 15px;
  border-radius: 7px;
  background: white;
  padding: 10px 40px 40px 40px;
  min-height: 90vh;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
`;

const BlogPage = () => {
  const dispatch = useDispatch();
  const { post, loading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.user);
  const param = useParams();

  useEffect(() => {
    dispatch(getPost(param.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = () => {
    dispatch(deletePost(param.id));
  };

  return (
    <BlogContainer>
      {loading ? (
        <Spinner />
      ) : (
        post && (
          <div>
            <h1 style={{ textTransform: "uppercase", color: "#ff416c" }}>
              {post.title}
            </h1>
            <h4 style={{ textTransform: "uppercase" }}>
              By {post.createdBy.name}
            </h4>
            {user && user._id === post.createdBy._id && (
              <>
                <Link to={`/edit-post/${param.id}`}>
                  <Button style={{ float: "right" }}>Edit</Button>
                </Link>
                <Button
                  type="button"
                  onClick={handleDelete}
                  style={{ display: "block" }}
                >
                  Delete
                </Button>
              </>
            )}
            <img
              src="https://c4.wallpaperflare.com/wallpaper/826/524/865/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg"
              alt="Loading...."
              style={{ width: "100%", marginTop: "10px" }}
            />
            <p>{post.content}</p>
          </div>
        )
      )}
    </BlogContainer>
  );
};

export default BlogPage;
