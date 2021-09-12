import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "../helpers/axiosInstance";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const param = useParams();
  const getBlogs = async () => {
    const {
      data: { data },
    } = await axiosInstance.get(`/posts/${param.id}`);
    setBlog(data);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="container">
      <div
        style={{
          marginTop: "15px",
          background: "white",
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingTop: "10px",
          paddingBottom: "10px",
          minHeight: "90vh",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.5)",
        }}
      >
        {blog && (
          <div>
            <h1 style={{ textTransform: "uppercase" }}>{blog.title}</h1>
            <img
              src="https://c4.wallpaperflare.com/wallpaper/826/524/865/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg"
              alt="Loading...."
              style={{ width: "100%" }}
              srcset=""
            />
            <p>{blog.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
