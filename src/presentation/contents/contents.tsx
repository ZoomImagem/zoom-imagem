"use client";

import styles from "./contents.module.scss";
import { ContentsListTag } from "./fragments/contents-list";

const ContentsComponent = () => {
  return (
    <>
      <div className={styles.contentsWrapper}>
        <div className={styles.contentsContent}>
          <div className={styles.contentsTitle}>
            <h2>Conteúdos</h2>
          </div>
          <ContentsListTag/>
        </div>
      </div>
    </>
  );
};

export default ContentsComponent;
