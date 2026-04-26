import { ContentTag } from "@/components";
import { OohHall } from "./hall";
import styles from "./ooh.module.scss";
import { OohDescription } from "./description";

export const OohComponent = () => {
  return (
    <div className={styles.oohWrapper}>
    
        <OohHall />
      
      <ContentTag colorTopPosition="right" colorBottomPosition="left">
        <OohDescription />
      </ContentTag>
    </div>
  );
};

export default OohComponent;
