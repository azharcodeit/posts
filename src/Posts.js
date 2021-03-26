import React, { useState, useEffect } from "react";
import "./Posts.css";
import spinner from "./assets/spinner.gif";
import Header from "./components/Header";
import PostImageWrapper from "./components/PostImageWrapper";
import Post from "./components/Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchfield, setSearchfield] = useState("");
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

  const filterPosts = (e) => {
    return setSearchfield(e.target.value);
  };

  const lowercasedFilter = searchfield.toLowerCase();
  const filteredPosts = posts.filter(
    (post) =>
      post.name.first.toString().toLowerCase().includes(lowercasedFilter) ||
      post.name.last.toString().toLowerCase().includes(lowercasedFilter) ||
      post.location.city.toString().toLowerCase().includes(lowercasedFilter)
  );

  return (
    <div className="layoutMain">
      <Header handleSubmit={handleSubmit} filterPosts={filterPosts} />
      <section className="grid">
        {filteredPosts.map((p, i) => (
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
