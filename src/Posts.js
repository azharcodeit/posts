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
            <img src="https://cutt.ly/pxj8Inp" alt="post" />
            <p className="title">{p.name.first}</p>
            <div className="description">
              <p>
                {p.location.city}, {p.location.state}
              </p>
              <p>{p.location.timezone.offset}</p>
            </div>
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
