"use client";

import { CtaTag } from "@/components/cta";
import { Projects } from "@/components/projects";
import Image from "next/image";
import { projectTypes, steps } from "./constants/proj-desc.constants";
import styles from "./proj-description.module.scss";

export const ProjDescription = () => {


  return (
    <>

      <section className={styles.sectionModal}>
        <div className={styles.contentWhat}>
          <div className={styles.textBlock}>

            <h2>O que são projetos especiais de comunicação?</h2>
            <p>
              Projetos especiais são soluções desenvolvidas sob medida para
              campanhas que exigem formatos, estruturas ou execuções fora do
              padrão.
            </p>
            <p>
              Eles combinam criatividade, engenharia e produção para transformar
              ideias em experiências reais de marca — seja em ações
              promocionais, ativações ou instalações personalizadas.
            </p>
          </div>
          <div className={styles.imageBox}>
            <Image
              src="/images/projetos-especiais/fallout/fallout3.webp"
              alt="Projeto especial de comunicação"
              width={1920}
              height={1080}
              className={styles.image}
            />
          </div>
        </div>
      </section>

      <section className={styles.sectionModal}>
        <div className={styles.contentAtuation}>
          <div className={styles.imageBox}>
            <Image
              src="/images/projetos-especiais/senna/senna3.webp"
              alt="Equipe Zoom executando projeto especial"
              width={1920}
              height={1080}
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>

            <h2>Do conceito à execução, sem depender de terceiros</h2>
            <p>
              A Zoom desenvolve projetos especiais com foco em viabilidade,
              execução e impacto.
            </p>
            <p>
              Atuamos desde o entendimento da necessidade até a entrega final,
              garantindo controle total do processo e consistência no resultado.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionModal}>
        <div className={styles.contentTypes}>
          <div className={styles.sectionHeader}>

            <h2>Soluções personalizadas para diferentes objetivos</h2>
          </div>
          <div className={styles.cardGrid}>
            {projectTypes.map((item) => (
              <div key={item.title} className={styles.card}>
                <Image src={item.icon} alt="" width={32} height={32} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionModal}>
        <div className={styles.contentHow}>
          <div className={styles.sectionHeader}>

            <h2 className={styles.titleLight}>
              Como desenvolvemos projetos especiais
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

      <section className={styles.sectionModal}>
        <div className={styles.contentRange}>
          <div className={styles.sectionHeader}>

            <h2 className={styles.titleLight}>
              Execução de projetos especiais em diferentes regiões
            </h2>
            <p>
              Nossa estrutura permite desenvolver e executar projetos especiais
              em diferentes cidades, garantindo padrão, segurança e
              consistência em todas as etapas.
            </p>
          </div>

        </div>
      </section>

      <section className={styles.sectionModal}>
        <Projects tag="Projetos especiais" />
      </section>

      <CtaTag />
    </>
  );
};

export default ProjDescription; 