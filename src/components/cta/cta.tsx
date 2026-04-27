"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./cta.module.scss";
import Image from "next/image";
import { FiArrowRight, FiCheck, FiCheckCircle } from "react-icons/fi";
import { ButtonTag } from "../Button";

export const CtaTag = () => {
  const router = useRouter();
  const [inView, setInView] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  function handleClick(link: string) {
    router.push(link);
  }

  const imagesCta = [
    "/images/ooh/avon/avon1.webp",
    "/images/ooh/shopee/shopee1.jpg",
    "/images/projetos-especiais/99food/991.webp",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section className={styles.cta} ref={sectionRef}>
        <div
          className={`${styles.ctaContainer} ${styles.bottomRight} ${inView ? styles["ctaContainer--visible"] : ""}`}
        >
          <div className={styles.ctaMosaic}>
            <div
              className={`${styles.ctaImgWrap} ${styles["ctaImgWrap--top"]}`}
            >
              <Image
                src={imagesCta[0]}
                alt="Equipe Zoom PDV"
                fill
                className={styles.ctaImg}
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div
              className={`${styles.ctaImgWrap} ${styles["ctaImgWrap--bottom-left"]}`}
            >
              <Image
                src={imagesCta[1]}
                alt="Material de PDV"
                fill
                className={styles.ctaImg}
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </div>
            <div
              className={`${styles.ctaImgWrap} ${styles["ctaImgWrap--bottom-right"]}`}
            >
              <Image
                src={imagesCta[2]}
                alt="Produção PDV"
                fill
                className={styles.ctaImg}
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </div>

            {/* Floating badge */}
            <div className={styles.ctaBadge}>
              <div className={styles.ctaBadgeIcon}>
                <FiCheck />
              </div>
              <div>
                <p className={styles.ctaBadgeTitle}>+500 projetos</p>
                <p className={styles.ctaBadgeSub}>entregues com sucesso</p>
              </div>
            </div>
          </div>

          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Sua marca já deveria estar sendo vista
            </h2>

            <p className={styles.ctaText}>
              Fale com uma equipe especializada em produção de OOH, PDV e
              projetos especiais e leve sua marca para os principais pontos de
              contato com o público.
            </p>

            <div className={styles.ctaFeatures}>
              {[
                "Produção em escala",
                "Padronização garantida",
                "Logística integrada",
                "Suporte especializado",
              ].map((feat) => (
                <div key={feat} className={styles.ctaFeature}>
                  <span className={styles.ctaFeatureIcon}>
                    <FiCheckCircle />
                  </span>
                  {feat}
                </div>
              ))}
            </div>

            <div className={styles.ctaActions}>
              <ButtonTag
                label="Falar com a Zoom"
                size="lg"
                variant="secondary"
                icon={<FiArrowRight size={24} color="#ee0874" />}
                onClick={() => handleClick("/contato")}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaTag;
