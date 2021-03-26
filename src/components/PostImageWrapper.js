import React from "react";
import "../Posts.css";
import deleteImg from "../assets/delete.png";

const PostImageWrapper = ({ i, deleteHandler }) => {
  return (
    <div className="imageWrapper">
      <img src={`https://picsum.photos/id/${i + 11}/600/200`} alt="post" />
      <div>
        <div className="actions">
          <h5 className="editButton">Edit</h5>
          <img
            src={deleteImg}
            alt="delete"
            className="postActions"
            onClick={deleteHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default PostImageWrapper;
