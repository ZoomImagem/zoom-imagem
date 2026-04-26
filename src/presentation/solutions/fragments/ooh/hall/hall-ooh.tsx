"use client";

import styles from "./hall-ooh.module.scss";
import { ButtonTag } from "@/components";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { Folder } from "lucide-react";
import Image from "next/image";

export const OohHall = () => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }
  return (
    <>
      <section className={styles.hallWrapper}>
        <section className={styles.heroSectionContainer}>
          <div className={styles.heroContainer}>
            <div className={styles.heroLeft}>
              <h1 className={styles.heroTitle}>
                Produção e execução de OOH em todo o Brasil
              </h1>
              <p className={styles.heroText}>
                Planejamos, produzimos e instalamos campanhas de mídia exterior
                com qualidade, escala e controle em cada etapa.
              </p>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.heroImgWrap}>
                <Image
                  src="/images/senna.jpg"
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
              icon={<Folder size={24} color="#EE0874" />}
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
    </>
  );
};

export default OohHall;
