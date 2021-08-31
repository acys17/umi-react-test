import React from "react";
import styles from "./UserProfile.module.scss";

const UserProfile = (props) => {
  const { isProfileVisible } = props;

  // const handleClick = (
  //   setProfileVisible(false)
  // )

  return (
    <div className={styles.profile}>
      <p>UserProfile works</p>
      <p onClick={isProfileVisible}>Back</p>
    </div>
  );
};

export default UserProfile;
