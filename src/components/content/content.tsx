import { PropsWithChildren } from "react";
import styles from "./content.module.scss";
import clsx from "clsx";
import { CenterTag } from "../center";

export interface IContentProps extends PropsWithChildren {
  colorTopPosition?: "left" | "right";
  colorBottomPosition?: "left" | "right";
}

const ContentComponent = ({
  children,
  colorBottomPosition,
  colorTopPosition,
}: IContentProps) => {
  return (
    <div className={styles.contentWrapper}>
      {colorTopPosition && (
        <div
          className={clsx(
            styles.color,
            colorTopPosition === "left" ? styles.topLeft : styles.topRight,
          )}
        ></div>
      )}
      <CenterTag>
        <div className={styles.child}>{children}</div>
      </CenterTag>
      {colorBottomPosition && (
        <div
          className={clsx(
            styles.color,
            colorBottomPosition === "left"
              ? styles.bottomLeft
              : styles.bottomRight,
          )}
        ></div>
      )}
    </div>
  );
};

export default ContentComponent;
