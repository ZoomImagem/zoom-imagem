"use client";

import Link from "next/link";
import { Article } from "../post";
import styles from "./mural.module.scss";
import { ContentTag } from "@/components";

interface MuralProps {
  articles: Article[];
}

const MuralTemplate: React.FC<MuralProps> = ({ articles }) => {
  return (
    <div className={styles.contentBlog}>
      <header className={styles.header}>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.subtitle}>
          Ideias, análises e cases sobre publicidade fora de casa.
        </p>
      </header>

      <ContentTag colorBottomPosition="right">
        <div className={styles.timeline}>
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`${styles.timelineItem} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <span className={styles.timelineDot} aria-hidden="true" />

              <Link
                href={`/conteudos/blog/${article.slug}`}
                className={styles.card}
                aria-label={`Abrir artigo: ${article.title}`}
              >
                <div className={styles.cardMeta}>
                  <span className={styles.cardCategory}>{article.category}</span>
                  <span className={styles.cardReadingTime}>
                    {article.readingTime}
                  </span>
                </div>

                <h2 className={styles.cardTitle}>{article.title}</h2>
                <p className={styles.cardLede}>{article.lede}</p>

                <div className={styles.cardFooter}>
                  <span className={styles.cardAuthor}>{article.author.name}</span>
                  <span className={styles.cardDate}>{article.publishedAt}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </ContentTag>
    </div>
  );
};

export default MuralTemplate;