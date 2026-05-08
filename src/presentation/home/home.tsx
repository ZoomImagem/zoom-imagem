"use client";

import { AboutHomeTag, ApplicationsTag, CasesTag, HallTag } from "./fragments";
import styles from "./home.module.scss";

const HomeComponent = () => {
  return (
    <>
    
      <div className={styles.hallWrapper}>
        <div className={styles.homeBackground}>
          <video autoPlay muted loop playsInline className={styles.heroVideo}>
            <source src="/images/hall-video.mp4" type="video/mp4" />
          </video>
          <HallTag />
        </div>
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.homeWrapper}>
        <AboutHomeTag />
        <CasesTag />
        <ApplicationsTag />
      </div>
    </>
  );
};

export default HomeComponent;
