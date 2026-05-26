"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./post.module.scss";
import { Article, ContentBlock } from "./constants/post.types";
import { ButtonTag } from "@/components";
import { FiArrowDownRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface ArticlePageProps {
  article: Article;
  onBack?: () => void;
}

const ContentBlockRenderer: React.FC<{ block: ContentBlock }> = ({ block }) => {
  switch (block.type) {
    case "paragraph":
      return <p>{block.text}</p>;

    case "heading":
      return <h2>{block.text}</h2>;

    case "advantages":
      return (
        <div className={styles.advantages}>
          {block.items.map((adv) => (
            <div key={adv.number} className={styles.advantage}>
              <div className={styles.advantageNumber}>{adv.number}</div>
              <div className={styles.advantageContent}>
                <h3>{adv.title}</h3>
                <p>{adv.description}</p>
              </div>
            </div>
          ))}
        </div>
      );

    case "list":
      return (
        <ul className={styles.featureList}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );

    case "quote":
      return <div className={styles.closingStatement}>{block.text}</div>;

    case "cases":
      return (
        <section className={styles.casesSection}>
          <header className={styles.casesHeader}>
            <span className={styles.casesEyebrow}>Cases reais</span>
            <h2 className={styles.casesTitle}>
              Marcas que executaram com excelência
            </h2>
          </header>

          <div className={styles.casesGrid}>
            {block.items.map((caseItem) => (
              <a
                key={caseItem.instagramUrl}
                href={caseItem.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.caseCard}
                aria-label={`Ver case ${caseItem.brand} ${caseItem.title} no Instagram`}
              >
                <div className={styles.caseThumb}>
                  <Image
                    src={caseItem.thumbnail}
                    alt={`${caseItem.brand} — ${caseItem.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className={styles.caseImage}
                  />
                </div>
                <div className={styles.caseInfo}>
                  <span className={styles.caseBrand}>{caseItem.brand}</span>
                  <h3 className={styles.caseTitle}>{caseItem.title}</h3>
                  <span className={styles.caseLink}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    Ver no Instagram
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      );

    default:
      return null;
  }
};

const PostTemplate: React.FC<ArticlePageProps> = ({ article, onBack }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [article.id]);

  const getCurrentUrl = (): string => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(getCurrentUrl());
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank",
      "noopener,noreferrer,width=600,height=600",
    );
  };

  const handleShareFacebook = () => {
    const url = encodeURIComponent(getCurrentUrl());
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank",
      "noopener,noreferrer,width=600,height=600",
    );
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getCurrentUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar link:", err);
    }
  };

  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [article.id]);

  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <div className={styles.metaTop}>
          <span className={styles.category}>{article.category}</span>
          <span className={styles.divider} />
          <span>{article.readingTime}</span>
        </div>

        <h1 className={styles.title}>{article.title}</h1>

        <p className={styles.lede}>{article.lede}</p>

        <div className={styles.authorInfo}>
          <div className={styles.avatar}>{article.author.initial}</div>
          <div className={styles.authorText}>
            <div className={styles.authorName}>{article.author.name}</div>
            <div className={styles.authorDate}>{article.publishedAt}</div>
          </div>
        </div>

        <div className={styles.body}>
          {article.content.map((block, index) => (
            <ContentBlockRenderer key={index} block={block} />
          ))}
        </div>

        <div className={styles.articleFooter}>

           <div className={styles.share}>
            <span className={styles.shareLabel}>
              Compartilhar
            </span>

            

            <button
              className={styles.shareBtn}
              aria-label="Compartilhar no LinkedIn"
              type="button"
              onClick={handleShareLinkedIn}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </button>

            <button
              className={styles.shareBtn}
              aria-label="Compartilhar no Facebook"
              type="button"
              onClick={handleShareFacebook}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </button>

            <button
              className={`${styles.shareBtn} ${copied ? styles.shareBtnCopied : ""}`}
              aria-label={copied ? "Link copiado" : "Copiar link"}
              type="button"
              onClick={handleCopyLink}
            >
              {copied ? (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              )}
            </button>
            <span className={styles.shareLabel}>
              {copied ? "Link copiado!" : ""}
            </span>
          </div>
      
          {/* <div className={styles.share}>
            <span className={styles.shareLabel}>Compartilhar</span>
            <button
              className={styles.shareBtn}
              aria-label="Compartilhar no LinkedIn"
              type="button"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </button>
            <button
              className={styles.shareBtn}
              aria-label="Compartilhar no Twitter"
              type="button"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>
            <button
              className={styles.shareBtn}
              aria-label="Copiar link"
              type="button"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </button>
          </div> */}
        </div>
      </article>
      <div className={styles.contentCopy}>
        <h3>
          <strong>Seu projeto precisa </strong> de execução real
        </h3>

        <div className={styles.copyDescription}>
          <p>
            Fale com nossa equipe de especialistas e desenvolva campanhas com
            presença, escala e impacto.{" "}
            <strong>Entre em contato agora mesmo!</strong>
          </p>

          <ButtonTag
            label="Entrar em contato"
            size="lg"
            variant="secondary"
            onClick={() => handleClick("/contato")}
            icon={<FiArrowDownRight size={24} color="#ee0874" />}
          />
        </div>
      </div>
    </div>
  );
};

export default PostTemplate;
