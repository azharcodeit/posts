import React from "react";
import "../Posts.css";

const Header = ({ handleSubmit }) => {
  return (
    <header id="header">
      <h6 className="logo">POSTS</h6>
      <button onClick={handleSubmit}>LOAD POSTS</button>
    </header>
  );
};

export default Header;
