"use client";

import styles from "./solutions.module.scss";

import { SolutionsListTag } from "./fragments/solutions-list";

const SolutionsComponent = () => {
  return (
    <>
      <div className={styles.solutionsWrapper}>
        <div className={styles.solutionsContent}>
          <div className={styles.solutionsTitle}>
            <h2>Serviços prestados pela Zoom Imagem</h2>
            <p>Conheça as principais soluções que a Zoom oferece</p>
          </div>
          <SolutionsListTag />
        </div>
      </div>
    </>
  );
};

export default SolutionsComponent;
