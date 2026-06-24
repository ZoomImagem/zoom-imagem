"use client";

import styles from "./solutions.module.scss";

import { SolutionsListTag } from "./fragments/solutions-list";

const SolutionsComponent = () => {
  return (
    <>
      <div className={styles.solutionsWrapper}>
        <div className={styles.solutionsContent}>
          <div className={styles.solutionsTitle}>
            <h2>Conheça as principais soluções que a Zoom oferece</h2>
          </div>
          <SolutionsListTag />
        </div>
      </div>
    </>
  );
};

export default SolutionsComponent;
