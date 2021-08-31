import React from "react";
import styles from "./UserProfile.module.scss";
import Post from "../Post";

const UserProfile = (props) => {
  const { isProfileVisible, posts, user } = props;

  const getPosts = (post) => (
    <div className={styles.post} key={post.id}>
      <Post post={post} />
    </div>
  );

  return (
    <div className={styles.profile}>
      <h2 className={styles.title}>Posts by {user.name}</h2>
      <div className={styles.topPanel}>
        <p className={styles.backButton} onClick={isProfileVisible}>Back</p>
        <p>Number of posts: {posts.length}</p>
      </div>
      <div className={styles.body}>
        <div className={styles.userInfo}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
        <div className={styles.posts}>
          {posts ? posts.map(getPosts) : null}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
