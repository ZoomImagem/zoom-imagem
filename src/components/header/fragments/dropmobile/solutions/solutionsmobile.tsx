"use client";

import { solucoes } from "@/lib/solucoes/solucoes";
import Image from "next/image";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import styles from "./solutionsmobile.module.scss";
import { useRouter } from "next/navigation";

type Props = {
  onClose: () => void;
};

export const DropSolutionsMobile = ({ onClose }: Props) => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }
  return (
    <div className={styles.headerMobileOpen}>
      <div className={styles.headerContent}>
        <Image
          alt="Zoom"
          src="/images/logo-zoom.svg"
          width={100}
          height={100}
          onClick={() => handleClick("/")}
        />
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
