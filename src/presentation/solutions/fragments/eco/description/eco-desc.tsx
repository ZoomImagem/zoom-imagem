"use client";

import { ButtonTag } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowRight, FiCheck, FiCheckCircle } from "react-icons/fi";

import styles from "./eco-desc.module.scss";
import { useRef, useState, useEffect } from "react";
import {
  AmbienteProjects,
  imagesCta,
  project,
  solutions,
  steps,
} from "./constants/eco.constants";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export const EcoDescription = () => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }

  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] =
    useState<AmbienteProjects | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const getImages = (project: AmbienteProjects): string[] =>
    project.images && project.images.length > 0
      ? project.images
      : [project.img];

  const handlePrev = () => {
    if (!selectedProject) return;
    const imgs = getImages(selectedProject);
    setCarouselIndex((prev) => (prev - 1 + imgs.length) % imgs.length);
  };

  const handleNext = () => {
    if (!selectedProject) return;
    const imgs = getImages(selectedProject);
    setCarouselIndex((prev) => (prev + 1) % imgs.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    if (selectedProject) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selectedProject, carouselIndex]);

  const openProject = (item: AmbienteProjects) => {
    setCarouselIndex(0);
    setSelectedProject(item);
  };

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
      <section className={`${styles.descWrap} ${styles.topLeft}`}>
        <section className={`${styles.sectionWrap} ${styles.topLeft}`}>
          <div className={styles.contentWhat}>
            <div className={styles.textBlock}>
              <h2>O que são materiais sustentáveis para comunicação?</h2>
              <p>
                A linha eco reúne soluções desenvolvidas com foco em redução de
                impacto ambiental, utilizando materiais recicláveis,
                reutilizáveis ou com menor geração de resíduos.
              </p>
              <p>
                Essas soluções permitem que marcas mantenham presença e
                qualidade em suas campanhas, com mais responsabilidade
                ambiental.
              </p>
            </div>
            <div className={styles.imageBox}>
              <Image
                src="/images/senna.jpg"
                alt="Materiais sustentáveis para comunicação"
                width={368}
                height={368}
                className={styles.image}
              />
            </div>
          </div>

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

        <section className={`${styles.sectionWrap} ${styles.topRight}`}>
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

        <section className={`${styles.sectionWrap} ${styles.bottomRight}`}>
          <div className={styles.contentRange}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.titleLight}>
                Soluções sustentáveis em diferentes formatos e regiões
              </h2>
              <p>
                Aplicamos soluções eco em campanhas de diferentes portes,
                mantendo padronização e eficiência mesmo em projetos de maior
                escala.
              </p>
            </div>
          </div>
          <div className={styles.contentProjects}>
            <div className={styles.sectionHeader}>
              <h2>Projetos com soluções sustentáveis</h2>
            </div>
            <div className={styles.projectsGrid}>
              {project.map((item, i) => (
                <div
                  key={item.brand}
                  className={styles.projectCard}
                  onClick={() => openProject(item)}
                >
                  <Image
                    src={item.img}
                    alt={`Projeto sustentável – ${item.brand}`}
                    fill
                    className={styles.projectImage}
                  />
                  <div className={styles.projectOverlay}>
                    <p className={styles.projectBrand}>{item.brand}</p>
                    <p className={styles.projectType}>{item.type}</p>
                  </div>
                </div>
              ))}

              {/* {project.map((p) => (
                <div
                  key={p.brand}
                  className={styles.projectCard}
                  onClick={() => openProject()}
                >
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
              ))} */}
            </div>
          </div>
          <div className={styles.btnMore}>
            <ButtonTag
              label="Ver mais projetos"
              size="lg"
              variant="ecoglass"
              icon={<FiArrowRight size={24} color="#111D13" />}
              onClick={() => handleClick("/portfolio")}
            />
          </div>
        </section>

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
                  label="Fale com nossa equipe"
                  size="lg"
                  variant="ecoglass"
                  icon={<FiArrowRight size={22} color="#111D13" />}
                  onClick={() => handleClick("/contato")}
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      {selectedProject &&
        (() => {
          const imgs = getImages(selectedProject);
          const hasMultiple = imgs.length > 1;

          return (
            <div
              className={styles.modal}
              onClick={() => setSelectedProject(null)}
              role="dialog"
              aria-modal="true"
            >
              <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className={styles.modalClose}
                  onClick={() => setSelectedProject(null)}
                  aria-label="Fechar modal"
                >
                  <X size={20} />
                </button>

                {/* ── Carousel ── */}
                <div className={styles.modalImageWrap}>
                  {imgs.map((src, idx) => (
                    <div
                      key={idx}
                      className={`${styles.modalSlide} ${idx === carouselIndex ? styles["modalSlide--active"] : ""}`}
                      aria-hidden={idx !== carouselIndex}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        className={styles.modalImage}
                        priority={idx === 0}
                      />
                    </div>
                  ))}

                  {/* Prev / Next buttons */}
                  {hasMultiple && (
                    <>
                      <button
                        className={`${styles.carouselBtn} ${styles["carouselBtn--prev"]}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrev();
                        }}
                        aria-label="Imagem anterior"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        className={`${styles.carouselBtn} ${styles["carouselBtn--next"]}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNext();
                        }}
                        aria-label="Próxima imagem"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}

                  {/* Dot indicators */}
                  {hasMultiple && (
                    <div className={styles.carouselDots}>
                      {imgs.map((_, idx) => (
                        <button
                          key={idx}
                          className={`${styles.carouselDot} ${idx === carouselIndex ? styles["carouselDot--active"] : ""}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCarouselIndex(idx);
                          }}
                          aria-label={`Ir para imagem ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })()}
    </>
  );
};

export default EcoDescription;
