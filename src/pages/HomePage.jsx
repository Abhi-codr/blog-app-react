import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import BlogComponent from "../components/BlogComponent";
import { getPosts } from "../store/slices/postSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, posts } = useSelector((state) => state.posts);

  const getBlogs = () => {
    dispatch(getPosts());
  };

  useEffect(() => {
    getBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {!loading ? (
          posts.length > 0 ? (
            posts.map((el) => <BlogComponent el={el} />)
          ) : (
            <h2
              style={{ color: "white", textShadow: "1px 1.5px rgba(0,0,0,.5)" }}
            >
              Empty
            </h2>
          )
        ) : (
          <h2
            style={{ color: "white", textShadow: "1px 1.5px rgba(0,0,0,.5)" }}
          >
            Loading....
          </h2>
        )}
      </div>
    </div>
  );
};

export default HomePage;
