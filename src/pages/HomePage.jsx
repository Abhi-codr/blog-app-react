import React, { useEffect, useState } from "react";
import BlogComponent from "../components/BlogComponent";
import axiosInstance from "../helpers/axiosInstance";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const getBlogs = async () => {
    const {
      data: { data },
    } = await axiosInstance.get("/posts");
    console.log(data);
    setBlogs(data);
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div className="container" style={{ minHeight: "90vh" }}>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          textShadow: "1px 1.5px rgba(0,0,0,.5)",
        }}
      >
        Blogs
      </h1>
      <div className="row">
        {blogs.length > 0 ? (
          blogs.map((el) => <BlogComponent el={el} />)
        ) : (
          <h2>Empty</h2>
        )}
      </div>
    </div>
  );
};

export default HomePage;
