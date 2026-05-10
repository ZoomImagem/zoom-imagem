"use client";

import { ButtonTag } from "@/components";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import styles from "./projects.module.scss";
import { categories, Project, projects } from "./constants/projects.constants";
import { LoadingTag } from "../loading";

type Props = {
  tag: string;
};

export default function Projects({ tag }: Props) {
  const [activeFilter, setActiveFilter] = useState(tag ?? "Todos");
  const [inView, setInView] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const widthMobile = 600;
  const widthDesktop = 1192;

  const getInitialCount = () => {
    if (typeof window === "undefined") return 6; // SSR guard
    const w = window.innerWidth;
    if (w <= widthMobile) return 4;
    if (w <= widthDesktop) return 6;
    return 9;
  };

  const [visibleCount, setVisibleCount] = useState(getInitialCount);

  const getImages = (project: Project): string[] =>
    project.images && project.images.length > 0
      ? project.images
      : [project.image];

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

  const openProject = (project: Project) => {
    setCarouselIndex(0);
    setSelectedProject(project);
  };

  const filtered = (
    activeFilter === "Todos"
      ? projects
      : projects.filter((project) => project.tag === activeFilter)
  ).slice(0, visibleCount);

  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }

  return (
    <>
      <section className={styles.projects} ref={sectionRef}>
        <div className={styles.projectsContainer}>
          <div className={styles.projectsHeader}>
            <h2 className={styles.projectsTitle}>
              Confira alguns dos nossos trabalhos
            </h2>
            <p className={styles.projectsSubtitle}>
              Conheça alguns dos projetos desenvolvidos pela nossa equipe para
              diferentes marcas e campanhas.
            </p>
          </div>

          <div className={styles.projectsFilters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.projectsFilterBtn} ${activeFilter === cat ? styles["projectsFilterBtn--active"] : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <Suspense fallback={<LoadingTag />}>
            <div
              className={`${styles.projectsGrid} ${inView ? styles["projectsGrid--visible"] : ""}`}
            >
              {filtered.map((project, i) => (
                <div
                  key={project.id}
                  className={styles.projectsCard}
                  style={{ animationDelay: `${i * 80}ms` }}
                  onClick={() => openProject(project)}
                  aria-label={`Expandir projeto ${project.title}`}
                >
                  <div className={styles.projectsImageWrap}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.projectsImage}
                      placeholder="empty"
                      loading="lazy"
                    />
                    <div className={styles.projectsOverlay}>
                      <span className={styles.projectsOverlayTag}>
                        {project.tag}
                      </span>
                      <div className={styles.projectsOverlayContent}>
                        <h3 className={styles.projectsCardTitle}>
                          {project.title}
                        </h3>
                        <p className={styles.projectsCardCategoty}>
                          {project.aplication}
                        </p>
                      </div>
                      <button className={styles.projectsOverlayIcon}>
                        <Expand size={16} />
                      </button>
                    </div>
                  </div>

                  <div className={styles.projectsCardFooter}>
                    <div>
                      <h3 className={styles.projectsCardFooterTitle}>
                        {project.title}
                      </h3>
                      <p className={styles.projectsCardFooterCat}>
                        {project.aplication}
                      </p>
                    </div>
                    <span className={styles.projectsCardTag}>
                      {project.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className={styles.projectsEmpty}>
                <p>Nenhum projeto encontrado para este filtro.</p>
              </div>
            )}
          </Suspense>
        </div>

        {visibleCount <= filtered.length && (
          <div className={styles.btnMore}>
            <ButtonTag
              label="Carregar mais..."
              size="lg"
              variant="primary"
              onClick={() =>
                setVisibleCount(
                  (prev) => prev + (window.innerWidth <= widthMobile ? 4 : 6),
                )
              }
            />
          </div>
        )}
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
              aria-label={selectedProject.title}
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
                        alt={`${selectedProject.title} – imagem ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 80vw"
                        className={styles.modalImage}
                        priority={idx === 0}
                        loading={idx === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}

                  {/* Tag */}
                  <span className={styles.modalTag}>{selectedProject.tag}</span>

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

                <div className={styles.modalBody}>
                  <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                  <p className={styles.modalCategory}>
                    {selectedProject.aplication}
                  </p>
                  <p className={styles.modalDescription}>
                    Projeto desenvolvido pela equipe Zoom para aplicação em{" "}
                    <strong>{selectedProject.aplication.toLowerCase()}</strong>.
                    Uma solução criativa e impactante que une design, tecnologia
                    e sustentabilidade para destacar a marca no ponto de contato
                    com o consumidor.
                  </p>
                  <div className={styles.buttonCta}>
                    <ButtonTag
                      label="Falar com a Zoom"
                      size="lg"
                      variant="primary"
                      onClick={() => handleClick("/contato")}
                      icon={<FiArrowRight size={22} color="#000" />}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
    </>
  );
}
