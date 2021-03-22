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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPosts();
  };

  return (
    <div className="layoutMain">
      <header id="header">
        <h2>Post feed</h2>
        <button onClick={handleSubmit}>LOAD POSTS</button>
      </header>

      <section className="grid">
        {posts.map((p, i) => (
          <div key={i} className="postContainer">
            <div className="image-wrapper">
              <img
                src={`https://picsum.photos/id/${i + 11}/600/200`}
                alt="post"
              />
            </div>
            <p className="title">{p.name.first}</p>
            <div className="description">
              <p>
                {p.location.city}, {p.location.state}
              </p>
              <p>{p.location.timezone.offset}</p>
            </div>
            <hr />
            <div className="author">
              <img
                src={p.picture.thumbnail}
                className="authorPicture"
                alt="author"
              />
              <div className="authorInfo">
                BY: {p.name.first.toUpperCase()} {p.name.last.toUpperCase()}{" "}
                <br />
                {p.email}
              </div>
            </div>
          </div>
        ))}
      </section>
      {loading ? <Spinner animation="border" variant="dark" /> : ""}
    </div>
  );
};

export default Posts;
