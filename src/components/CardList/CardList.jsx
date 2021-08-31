import React, { useState, useEffect } from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";

const CardList = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const getUserAPI = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  const getPostsAPI = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  useEffect(() => {
    getUserAPI();
    getPostsAPI();
  }, [])

  const getCards = (user) => {
    const userPosts = posts ? posts.filter(post => post.userId === user.id) : null;

    return (
      <div className={styles.card} key={user.id} >
        <Card user={user} posts={userPosts} />
      </div>
    );
  };

  return (
    <div>
      <h1>Umi React Assignment</h1>
      <section className={styles.cards}>{users ? users.map(getCards) : null}</section>
    </div>
  )
};

export default CardList;
