import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Button from "../components/styled/Button";
import { getPost } from "../store/slices/postSlice";

const BlogPage = () => {
  const dispatch = useDispatch();
  const { post, loading } = useSelector((state) => state.posts);
  const param = useParams();
  const getBlog = async () => {
    dispatch(getPost(param.id));
  };

  useEffect(() => {
    getBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div
        style={{
          marginTop: "15px",
          borderRadius: "7px",
          background: "white",
          padding: "10px 40px 40px 40px",
          minHeight: "90vh",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.5)",
        }}
      >
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          post && (
            <div>
              <h1 style={{ textTransform: "uppercase" }}>{post.title}</h1>
              <h4 style={{ textTransform: "uppercase" }}>
                By {post.createdBy.name}
              </h4>
              <img
                src="https://c4.wallpaperflare.com/wallpaper/826/524/865/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg"
                alt="Loading...."
                style={{ width: "100%" }}
                srcset=""
              />
              <p>{post.content}</p>
              <Button style={{ float: "right" }}>Edit</Button>
              <Button style={{ display: "block" }}>Delete</Button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BlogPage;
