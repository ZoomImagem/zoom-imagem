"use client";

import { ButtonTag, ContentTag } from "@/components";
import styles from "./applications.module.scss";
import { AmbienteItem, items } from "./constants/aplications.constants";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const ApplicationsComponent = () => {
  const router = useRouter();
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<AmbienteItem | null>(
    null,
  );
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  function handleClick(link: string) {
    router.push(link);
  }

  const getImages = (item: AmbienteItem): string[] =>
    item.images && item.images.length > 0 ? item.images : [item.image];

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

  const openProject = (item: AmbienteItem) => {
    setCarouselIndex(0);
    setSelectedProject(item);
  };

  return (
    <ContentTag colorBottomPosition="left">
      <section className={styles.contentAmbientes}>
        <div className={styles.header}>
          <h2 className={styles.title}>Onde sua marca pode estar</h2>
          <p className={styles.sub}>
            Aplicamos nossos projetos em diferentes ambientes, formatos e
            contextos — sempre com foco em presença e execução.
          </p>
        </div>

        <ul className={styles.contentAplications}>
          {items.map((item, i) => (
            <li
              key={item.texto}
              className={styles.card}
              // style={{ backgroundImage: `url(${image})` }}
            >
              <div
                className={styles.contentCard}
                style={{ animationDelay: `${i * 80}ms` }}
                onClick={() => openProject(item)}
              >
                <div className={styles.iconCard}>
                  <Image src={item.image} alt="" width={40} height={40} />
                </div>
                <div className={styles.descriptionCard}>
                  <span>{item.texto}</span>
                </div>
                <div className={styles.btnMore}>
                  <FiArrowRight />
                </div>
              </div>
            </li>
          ))}
        </ul>

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
                          sizes="(max-width: 768px) 100vw, 55vw"
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

                  {/* <div className={styles.modalBody}>
                    <h3 className={styles.modalTitle}>
                      {selectedProject.title}
                    </h3>
                    <p className={styles.modalCategory}>
                      {selectedProject.aplication}
                    </p>
                    <p className={styles.modalDescription}>
                      Projeto desenvolvido pela equipe Zoom para aplicação em{" "}
                      <strong>
                        {selectedProject.aplication.toLowerCase()}
                      </strong>
                      . Uma solução criativa e impactante que une design,
                      tecnologia e sustentabilidade para destacar a marca no
                      ponto de contato com o consumidor.
                    </p>
                    <div className={styles.buttonCta}>
                      <ButtonTag
                        label="Falar com a Zoom"
                        size="lg"
                        variant="glass"
                        onClick={() => handleClick("/contato")}
                        icon={<FiArrowRight size={24} color="#EE0874" />}
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            );
          })()}
      </section>
    </ContentTag>
  );
};

export default ApplicationsComponent;
