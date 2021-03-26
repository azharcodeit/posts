import React from "react";
import "../Posts.css";

const Post = ({ first, last, city, state, offset, photo, email }) => {
  return (
    <div>
      <p className="title">{first}</p>
      <div className="description">
        <p>
          {city}, {state}
        </p>
        <p>{offset}</p>
      </div>

      <hr />

      <div className="author">
        <img src={photo} className="authorPicture" alt="author" />
        <div className="authorInfo">
          BY: {first.toUpperCase()} {last.toUpperCase()} <br />
          {email}
        </div>
      </div>
    </div>
  );
};

export default Post;
