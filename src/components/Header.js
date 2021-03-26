import React from "react";
import s from "./Header.module.css";

const Header = ({ handleSubmit, filterPosts }) => {
  return (
    <header className={s.header}>
      <h6 className={s.logo}>POSTS</h6>
      <div className={s.searchLoadContainer}>
        <form>
          <input onChange={filterPosts} placeholder="Search..." />
        </form>
        <button onClick={handleSubmit}>LOAD POSTS</button>
      </div>
    </header>
  );
};

export default Header;
