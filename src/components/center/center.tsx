import { PropsWithChildren } from "react";
import styles from "./center.module.scss";

const CenterComponent = ({ children }: PropsWithChildren) => {
  return <div className={styles.centerWrapper}>{children}</div>;
};

export default CenterComponent;
