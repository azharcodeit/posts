import React, { useState, useEffect } from "react";
import "./Posts.css";
import spinner from "./assets/spinner.gif";
import Header from "./components/Header";
import PostImageWrapper from "./components/PostImageWrapper";
import Post from "./components/Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://api.randomuser.me/?nat=US&results=4";

  const fetchPosts = () => {
    setLoading(true);
    fetch(url)
      .then((result) => result.json())
      .then(
        (data) => (setPosts([...posts, ...data.results]), setLoading(false))
      )
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPosts();
  };

  const deleteHandler = (e) => {
    const index = e.target.closest(".postContainer").id;
    if (window.confirm("Are you sure to delete this post?")) {
      const filteredPosts = posts.filter((item) => item !== posts[index]);
      setPosts(filteredPosts);
    }
  };

  return (
    <div className="layoutMain">
      <Header handleSubmit={handleSubmit} />
      <section className="grid">
        {posts.map((p, i) => (
          <div key={i} id={i} className="postContainer">
            <PostImageWrapper i={i} deleteHandler={deleteHandler} />
            <Post
              first={p.name.first}
              last={p.name.last}
              city={p.location.city}
              state={p.location.state}
              offset={p.location.timezone.offset}
              photo={p.picture.thumbnail}
              email={p.email}
            />
          </div>
        ))}
      </section>
      {loading ? (
        <img src={spinner} alt="loading..." style={{ width: 70, height: 70 }} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Posts;
