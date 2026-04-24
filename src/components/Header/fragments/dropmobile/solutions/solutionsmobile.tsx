  "use client";

  import { solucoes } from "@/lib/solucoes/solucoes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import styles from "./solutionsmobile.module.scss";

  type Props = {
    onClose: () => void;
  };

export const DropSolutionsMobile = ({ onClose }: Props) => {
  return (
    <div className={styles.headerMobileOpen}>
      <div className={styles.headerContent}>
        <Image alt="Zoom" src="/images/logo-zoom.svg" width={100} height={100} />
        <FiX size={36} color="#C4C4C4" onClick={onClose} />
      </div>

      <p className={styles.titleSolutions}>Soluções</p>

      <ul className={styles.listMenuMobile}>
        {solucoes.map((s) => (
          <li key={s.slug} onClick={onClose}>
            <Link href={`/solucoes/${s.slug}`}>{s.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


  export default DropSolutionsMobile;
