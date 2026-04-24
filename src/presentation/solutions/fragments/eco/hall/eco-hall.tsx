"use client";

import { ButtonTag } from "@/components";
import Image from "next/image";
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

      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/senna.jpg"
            alt="Publicidade sustentável"
            fill
            className={styles.heroBgImg}
            priority
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
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
              icon={<FiArrowRight size={20} color="#fff" />}
              onClick={() => handleClick("/contato")}
            />
            <ButtonTag
              label="Ver projetos"
              size="lg"
              variant="ecoglass"
              onClick={() => handleClick("/portfolio")}
              icon={<Folder size={20} color="#fff" />}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default EcoHall;
