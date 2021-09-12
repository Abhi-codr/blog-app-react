import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          textShadow: "1px 1.5px rgba(0,0,0,.5)",
        }}
      >
        Blogs
      </h1>
      {blogs.length > 0 ? (
        blogs.map((el) => (
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={`/posts/${el._id}`}
          >
            <div
              style={{
                boxShadow: "0 3px 6px rgba(0,0,0,.5)",
                padding: "20px",
                marginTop: "20px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <h2>{el.title}</h2>
              <h4 style={{ margin: "10px 0 0 0 " }}>
                {moment(el.date).format("DD/MM/YYYY")}
              </h4>
              <p>{el.content}</p>
              <div style={{ textAlign: "right" }}>
                <em>-{el.createdBy.name}</em>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <h2>Empty</h2>
      )}
    </div>
  );
};

export default HomePage;
