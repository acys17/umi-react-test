import React from "react";
import styles from "./Post.module.scss";

const Post = (props) => {
  const { post } = props;
  return (
    <div className={styles.post}>
      <p>{post.title}</p>
    </div>
  );
};

export default Post;
