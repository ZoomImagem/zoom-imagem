"use client";

import styles from "./loading.module.scss";

const LoadingComponent = () => {
  

  return (
    <div className={styles.loadingWrapper}>
      <span className={styles.spinner} />
    </div>
  );
};

export default LoadingComponent;
