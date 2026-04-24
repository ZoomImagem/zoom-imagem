"use client";

import { ButtonTag } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowRight, FiCheck, FiCheckCircle } from "react-icons/fi";

import styles from "./eco-desc.module.scss";
import { useRef, useState, useEffect } from "react";
import { images, projects, solutions, steps } from "./constants/eco.constants";



export const EcoDescription = () => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }

  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      <section className={styles.sectionModal}>
        <div className={styles.contentWhat}>
          <div className={styles.textBlock}>
            <h2>O que são materiais sustentáveis para comunicação?</h2>
            <p>
              A linha eco reúne soluções desenvolvidas com foco em redução de
              impacto ambiental, utilizando materiais recicláveis, reutilizáveis
              ou com menor geração de resíduos.
            </p>
            <p>
              Essas soluções permitem que marcas mantenham presença e qualidade
              em suas campanhas, com mais responsabilidade ambiental.
            </p>
          </div>
          <div className={styles.imageBox}>
            <Image
              src="/images/senna.jpg"
              alt="Materiais sustentáveis para comunicação"
              width={260}
              height={260}
              className={styles.image}
            />
          </div>
        </div>
      </section>

      {/* O que a Zoom faz */}
      <section className={styles.sectionModal}>
        <div className={styles.contentAtuation}>
          <div className={styles.imageBox}>
            <Image
              src="/images/senna.jpg"
              alt="Produção sustentável Zoom"
              width={260}
              height={260}
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Produção sustentável com padrão de qualidade</h2>
            <p>
              A Zoom desenvolve materiais sustentáveis para campanhas de OOH,
              PDV e projetos especiais, garantindo viabilidade técnica,
              durabilidade e acabamento.
            </p>
            <p>
              Nosso foco é equilibrar sustentabilidade com execução eficiente.
            </p>
          </div>
        </div>
      </section>

      {/* Tipos de soluções */}
      <section className={styles.sectionModal}>
        <div className={styles.contentTypes}>
          <div className={styles.sectionHeader}>
            <h2>Soluções sustentáveis para diferentes aplicações</h2>
          </div>
          <div className={styles.cardGrid}>
            {solutions.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className={styles.card}>
                  <div className={styles.cardIconWrap}>
                    <Icon size={24} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className={styles.sectionModal}>
        <div className={styles.contentHow}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.titleLight}>
              Como aplicamos soluções sustentáveis
            </h2>
          </div>
          <div className={styles.stepsGrid}>
            {steps.map((s) => (
              <div key={s.n} className={styles.stepCard}>
                <span className={styles.stepNumber}>{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicação em escala */}
      <section className={styles.sectionModal}>
        <div className={styles.contentRange}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.titleLight}>
              Soluções sustentáveis em diferentes formatos e regiões
            </h2>
            <p>
              Aplicamos soluções eco em campanhas de diferentes portes, mantendo
              padronização e eficiência mesmo em projetos de maior escala.
            </p>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className={styles.sectionModal}>
        <div className={styles.contentProjects}>
          <div className={styles.sectionHeader}>
            <h2>Projetos com soluções sustentáveis</h2>
          </div>
          <div className={styles.projectsGrid}>
            {projects.map((p) => (
              <div key={p.brand} className={styles.projectCard}>
                <Image
                  src={p.img}
                  alt={`Projeto sustentável – ${p.brand}`}
                  fill
                  className={styles.projectImage}
                />
                <div className={styles.projectOverlay}>
                  <p className={styles.projectBrand}>{p.brand}</p>
                  <p className={styles.projectType}>{p.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.btnMore}>
        <ButtonTag
          label="Ver mais projetos"
          size="lg"
          variant="ecoglass"
          icon={<FiArrowRight size={24} color="#111D13" />}
          onClick={() => handleClick("/portfolio")}
        />
      </div>
      
      <section className={styles.sectionModal} ref={sectionRef}>
        <div
          className={`${styles.ctaContainer} ${inView ? styles["ctaContainer--visible"] : ""}`}
        >
          <div className={styles.ctaMosaic}>
            <div
              className={`${styles.ctaImgWrap} ${styles["ctaImgWrap--top"]}`}
            >
              <Image
                src={images[0]}
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
                src={images[1]}
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
                src={images[2]}
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
              Sustentabilidade também é parte da presença da sua marca
            </h2>

            <p className={styles.ctaText}>
              Fale com a Zoom e desenvolva campanhas com menor impacto e alta
              qualidade de execução.
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
                size="sm"
                variant="ecoglass"
                icon={<FiArrowRight size={24} color="#111D13" />}
                onClick={() => handleClick("/contato")}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EcoDescription;
