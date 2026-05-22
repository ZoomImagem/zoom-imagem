"use client";

import { ButtonTag } from "@/components";
import { FiArrowRight } from "react-icons/fi";
import { listNews } from "./constants/news.constants";
import styles from "./news.module.scss";

const NewsComponent = () => {
  return (
    <>
      <section className={styles.newsWrapper}>
        <div className={styles.newsContent}>
          <div className={styles.hall}>
            <h1>Notícias sobre a Zoom Imagem</h1>
            <p>A nossa trajetória também vem sendo reconhecida por veículos de comunicação, premiações do mercado e canais especializados em publicidade, inovação e mídia exterior.</p>
          </div>
          <div className={styles.newsItems}>
            <ul className={styles.newsGrid}>
              {listNews.map((item, key) => (
                <li
                  key={key}
                  className={styles.item}
                  style={{ backgroundImage: `url(${item.image})` }}
                // onClick={() => handleClick(`/solucoes/${item.slug}`)}
                >
                  <div className={styles.itemContent}>
                    <div className={styles.itemTitle}>
                      <p>{item.title}</p>
                    </div>
                    <div className={styles.itemDescription}>
                      <p>{item.description}</p>
                    </div>
                    <div className={styles.buttonLink}>

                      <ButtonTag
                        label="Confira"
                        size="lg"
                        variant="primary"
                        icon={<FiArrowRight size={24} color="#191919" />}
                      // onClick={() => handleClick(`/solucoes/${item.slug}`)}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>

      </section>
    </>
  );
};

export default NewsComponent;
