import React from "react";
import styles from "./Card.module.scss";
import UserProfile from "../UserProfile";

const Card = (props) => {
  const { posts, user, profileVisible, isProfileVisible } = props;

  const profileIsVisible = profileVisible ? styles.profile : styles.hidden

  return (
    <section className={styles.card}>
      <div className={styles.userinfo}>
        <div>{user.name}</div>
        <div>{user.email}</div>
      </div>
      <div className={profileIsVisible}>
        <UserProfile posts={posts} user={user} isProfileVisible={isProfileVisible} isProfilePage={true} />
      </div>
    </section >
  );
};

export default Card;
