import moment from "moment";
import React from "react";
import LinkContainer from "./styled/LinkContainer";

const DEFAULT_IMG =
  "https://c4.wallpaperflare.com/wallpaper/826/524/865/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg";

const BlogComponent = ({ el }) => {
  return (
    <div style={{ zIndex: 0 }} className="col-lg-4 col-md-6">
      <LinkContainer to={`/posts/${el._id}`}>
        <div
          style={{
            boxShadow: "0 3px 6px rgba(0,0,0,.5)",
            marginTop: "20px",
            backgroundColor: "white",
          }}
        >
          <img
            src={el.imageUrl || ""}
            alt="Loading...."
            onError={(e) => {
              e.target.src = DEFAULT_IMG;
            }}
            style={{ width: "100%" }}
          />
          <div style={{ padding: "20px" }}>
            <h2>{el.title}</h2>
            <h4 style={{ margin: "10px 0 0 0 " }}>
              {moment(el.date).format("DD/MM/YYYY")}
            </h4>
            <p>
              {el.content.slice(0, 100)}...
              <strong style={{ color: "#FF416A" }}> Read More</strong>
            </p>
            <div style={{ textAlign: "right" }}>
              <em>By {el.createdBy.name}</em>
            </div>
          </div>
        </div>
      </LinkContainer>
    </div>
  );
};

export default BlogComponent;
