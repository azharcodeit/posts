import React, { useState, useEffect } from "react";
import "./Posts.css";
import spinner from "./assets/spinner.gif";
import deleteImg from "./assets/delete.png";

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
        <h6 className="logo">POSTS</h6>
        <button onClick={handleSubmit}>LOAD POSTS</button>
      </header>

      <section className="grid">
        {posts.map((p, i) => (
          <div key={i} className="postContainer">
            <div className="imageWrapper">
              <img
                src={`https://picsum.photos/id/${i + 11}/600/200`}
                alt="post"
              />
              <div>
                <div className="actions">
                  <h5 className="editButton">Edit</h5>
                  <img src={deleteImg} alt="delete" className="postActions" />
                </div>
              </div>
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
      {loading ? (
        <img
          src={spinner}
          alt="loading..."
          style={{ width: 100, height: 100 }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Posts;
