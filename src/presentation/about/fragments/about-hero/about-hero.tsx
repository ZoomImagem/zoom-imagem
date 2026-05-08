"use client";

import { ButtonTag } from "@/components";
import styles from "./about-hero.module.scss";
import { Folder } from "lucide-react";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";

const AboutHeroComponent = () => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }
  return (
    <section className={styles.hallWrapper}>
      <div className={styles.aboutDescription}>
        <div className={styles.titleDescription}>
          <h1>Execução que transforma presença em percepção de marca.</h1>
          <p>
            A Zoom é uma empresa especializada em produção e execução de
            projetos de OOH, PDV e comunicação visual, com atuação em todo o
            Brasil.
          </p>

          <div className={styles.ctaButtons}>
            <ButtonTag
              label="Fale com a Zoom"
              size="lg"
              variant="primary"
              icon={<FiArrowRight size={20} color="#191919" />}
              onClick={() => handleClick("/contato")}
            />
            <ButtonTag
              label="Ver projetos"
              size="lg"
              variant="primary"
              icon={<Folder size={20} color="#191919" />}
              onClick={() => handleClick("/portfolio")}
            />
          </div>
        </div>
        <div className={styles.cardDescription}>
          <p>
            Mais do que planejar, a gente faz acontecer — com controle, escala e
            consistência.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroComponent;
