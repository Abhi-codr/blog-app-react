import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import BlogComponent from "../components/BlogComponent";
import Spinner from "../components/Spinners";
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
    <>
      <h1
        style={{
          textAlign: "center",
          color: "#FF416A",
          textShadow: ".5px 1px rgba(0,0,0,.3)",
        }}
      >
        Blogs
      </h1>
      <div className="row">
        {!loading ? (
          posts.length > 0 ? (
            posts.map((el) => <BlogComponent el={el} key={el._id} />)
          ) : (
            <h2
              style={{
                color: "#FF416A",
                textAlign: "center",
                margin: "auto",
                textShadow: "1px 1.5px rgba(0,0,0,.5)",
              }}
            >
              Empty
            </h2>
          )
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default HomePage;
