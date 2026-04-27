"use client";

import Image from "next/image";
import styles from "./hall-pdv.module.scss";
import { ButtonTag } from "@/components";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function PdvHall() {
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
            Sua marca precisa estar presente no ponto de venda.
          </h1>
          <p className={styles.heroText}>
            Materiais de PDV bem executados destacam produtos, reforçam a marca
            e influenciam diretamente a decisão de compra.
          </p>
          <p className={styles.heroText2}>
            A Zoom atua na produção de displays, totens, wobblers, faixas e
            estruturas promocionais, garantindo qualidade, padronização e
            impacto em escala.
          </p>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroImgWrap}>
            <Image
              src="/images/pdv/mickey/mickey1.jpg"
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
