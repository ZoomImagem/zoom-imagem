"use client";
import Image from "next/image";
import styles from "./whatsapp.module.scss";
import Link from "next/link";

const WhatsappComponent = () => {
  const numeroWhatsApp = "5511947295889";
  const mensagem = "Olá, gostaria de fazer um orçamento!";

  const waUrl = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  return (
    <Link
      className={styles.whatsappWrapper}
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.whatsappToast}>Vendedor online!</span>
      <Image
        className={styles.whatsappImage}
        src="/images/whatsapp.png"
        alt="Vendedor online!"
        width={128}
        height={128}
      />
    </Link>
  );
};

export default WhatsappComponent;
