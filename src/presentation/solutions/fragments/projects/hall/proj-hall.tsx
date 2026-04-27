"use client";

import Image from "next/image";
import styles from "./proj-hall.module.scss";
import { ButtonTag } from "@/components";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function ProjHall() {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }
  return (
    <section className={styles.hallWrapper}>
      <section className={styles.heroSectionContainer}>
        <div className={styles.heroContainer}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              Projetos especiais de comunicação para marcas que precisam ir além
              do padrão.
            </h1>
            <p className={styles.heroText}>
              Desenvolvemos e executamos projetos personalizados que geram
              impacto, diferenciação e presença real para sua marca.
            </p>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroImgWrap}>
              <Image
                src="/images/projetos-especiais/tartarugas-ninja/tartaruga1.jpg"
                alt="Materiais de PDV"
                fill
                className={styles.heroImg}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
        <div className={styles.heroButtons}>
          <ButtonTag
            label="Ver mais projetos"
            size="lg"
            variant="secondary"
            icon={<FiArrowRight size={24} color="#EE0874" />}
            onClick={() => handleClick("/portfolio")}
          />
          <ButtonTag
            label="Falar com a zoom"
            size="lg"
            variant="secondary"
            icon={<FiArrowRight size={24} color="#EE0874" />}
            onClick={() => handleClick("/contato")}
          />
        </div>
      </section>
    </section>
  );
}
