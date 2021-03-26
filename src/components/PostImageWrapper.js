import React from "react";
import "../Posts.css";
import s from "./PostImageWrapper.module.css";
import deleteImg from "../assets/delete.png";

const PostImageWrapper = ({ i, deleteHandler }) => {
  return (
    <div className={s.imageWrapper}>
      <img src={`https://picsum.photos/id/${i + 11}/600/200`} alt="post" />
      <div>
        <div className={s.actions}>
          <h5 className={s.editButton}>Edit</h5>
          <img
            src={deleteImg}
            alt="delete"
            className={s.postActions}
            onClick={deleteHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default PostImageWrapper;
