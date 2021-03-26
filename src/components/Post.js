import React from "react";
import s from "./Post.module.css";

const Post = ({ first, last, city, state, offset, photo, email }) => {
  return (
    <div>
      <p className={s.title}>{first}</p>
      <div className={s.description}>
        <p>
          {city}, {state}
        </p>
        <p>{offset}</p>
      </div>

      <hr />

      <div className={s.author}>
        <img src={photo} className={s.authorPicture} alt="author" />
        <div className={s.authorInfo}>
          BY: {first.toUpperCase()} {last.toUpperCase()} <br />
          {email}
        </div>
      </div>
    </div>
  );
};

export default Post;
