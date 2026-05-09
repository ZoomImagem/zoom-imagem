"use client";
import Image from "next/image";
import styles from "./whatsapp.module.scss";

const WhatsappComponent = () => {
  return (
    <div className={styles.whatsappWrapper}>
      <span className={styles.whatsappToast}>Vendedor online!</span>
      <Image
        className={styles.whatsappImage}
        src="/images/whatsapp.png"
        alt="Vendedor online!"
        width={128}
        height={128}
      />
    </div>
  );
};

export default WhatsappComponent;
