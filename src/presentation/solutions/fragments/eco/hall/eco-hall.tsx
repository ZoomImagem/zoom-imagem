"use client";

import { ButtonTag } from "@/components";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import styles from "./eco-hall.module.scss";
import { Folder } from "lucide-react";

export const EcoHall = () => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }

  return (
    <>
      <section className={styles.hallWrapper}>
        
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Materiais sustentáveis para publicidade e comunicação visual
            </h1>
            <p className={styles.heroSubtitle}>
              Soluções que reduzem impacto ambiental sem abrir mão da qualidade,
              da execução e da presença da sua marca.
            </p>
            <div className={styles.heroActions}>
              <ButtonTag
                label="Falar com a Zoom"
                size="lg"
                variant="ecoglass"
                icon={<FiArrowRight size={22} color="#fff" />}
                onClick={() => handleClick("/contato")}
              />
              <ButtonTag
                label="Ver projetos"
                size="lg"
                variant="ecoglass"
                onClick={() => handleClick("/portfolio")}
                icon={<Folder size={22} color="#fff" />}
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default EcoHall;
