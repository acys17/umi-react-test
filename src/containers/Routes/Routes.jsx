import React from "react";
import styles from "./Routes.module.scss";
import CardList from '../../components/CardList';

const Routes = (props) => {
  const { users, posts } = props;

  return (
    <section className={styles.main}>
      <CardList users={users} posts={posts} />
    </section>
  );
};

export default Routes;
