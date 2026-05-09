"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./whatsapp.module.scss";

const WhatsappComponent = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.whatsappWrapper}>
      {/* {visible && ( */}
      <span className={styles.whatsappToast}>Vendedor online!</span>
      {/* )} */}
      <Image
        className={styles.whatsappImage}
        src="/images/whatsapp.png"
        alt="Vendedor online!"
        width={86}
        height={86}
        // onMouseEnter={() => setVisible(true)}
        // onMouseLeave={() => setVisible(false)}
      />
    </div>
  );
};

export default WhatsappComponent;
