import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import "./Posts.css";

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
  }, [url]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPosts();
  };

  return (
    <div className="layoutMain">
      <h2>Posts</h2>

      <div className="functionality">
        <form onSubmit={handleSubmit}>
          <input type="submit" value="Load posts" />
        </form>
      </div>

      <section className="grid">
        {posts.map((p, i) => (
          <div key={i} className="postContainer">
            <img
              src="https://images.unsplash.com/photo-1616069424312-71ba3e104641?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="post"
            />
            <p className="title">Title</p>
            <p className="description">
              description description description description description
              description
            </p>
            <hr />
            <p className="author">
              <img
                src={p.picture.thumbnail}
                className="authorPicture"
                alt="author"
              />
              By: {p.name.first} {p.name.last}{" "}
            </p>
          </div>
        ))}
      </section>
      {loading ? <Spinner animation="border" variant="dark" /> : ""}
    </div>
  );
};

export default Posts;
