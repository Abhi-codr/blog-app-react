import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "80px",
        width: "100%",
        background: "black",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h2>Blog App</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "20%",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Blogs
          </Link>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
