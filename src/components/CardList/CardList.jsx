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

  const [profileVisible, setProfileVisible] = useState(false);

  // If user profile is not already visible, make visible
  const isProfileVisible = () => setProfileVisible(!profileVisible);

  const getCards = (user) => {
    const userPosts = posts ? posts.filter(post => post.userId === user.id) : null;

    return (
      <div className={styles.card} key={user.id} onClick={isProfileVisible}>
        <Card user={user} posts={userPosts} profileVisible={profileVisible} isProfileVisible={isProfileVisible} />
      </div>
    );
  };

  return <section className={styles.cards}>{users ? users.map(getCards) : null}</section>;
};

export default CardList;
