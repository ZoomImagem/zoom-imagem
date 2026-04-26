"use client";

import { ContentTag } from "@/components";
import { PdvDescription } from "./description";
import { PdvHall } from "./hall";
import styles from "./pdv.module.scss";

export const PdvComponent = () => {
  return (
    <>
      <div className={styles.pdvWrapper}>
        <PdvHall />

        <ContentTag colorTopPosition="right" colorBottomPosition="left">
          <PdvDescription />
        </ContentTag>
      </div>
    </>
  );
};

export default PdvComponent;
