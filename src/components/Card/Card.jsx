import React, { useState } from "react";
import styles from "./Card.module.scss";
import UserProfile from "../UserProfile";

const Card = (props) => {
  const { posts, user } = props;

  const [profileVisible, setProfileVisible] = useState(false);

  // If user profile is not already visible, make visible
  const isProfileVisible = () => setProfileVisible(!profileVisible);

  const profileIsVisible = profileVisible ? styles.profile : styles.hidden;
  // const cardIsVisible = !profileVisible ? styles.userInfo : styles.hidden;

  return (
    <section className={styles.card} onClick={isProfileVisible}>
      <div className={styles.userInfo}>
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
