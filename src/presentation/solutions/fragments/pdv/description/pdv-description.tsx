"use client";

import { Projects } from "@/components/projects";
import Image from "next/image";
import styles from "./pdv-description.module.scss";
import { CtaTag } from "@/components/cta";
import { pdvTypes, steps } from "./constants/pdv-desc.constants";

export const PdvDescription = () => {
  return (
    <>
      {/* O que é PDV */}
      <section className={styles.sectionModal}>
        <div className={styles.contentWhat}>
          <div className={styles.textBlock}>
            <h2>O que são materiais de PDV?</h2>
            <p>
              Materiais de PDV (ponto de venda) são peças utilizadas dentro de
              lojas e ambientes comerciais para destacar produtos, reforçar a
              marca e influenciar a decisão de compra.
            </p>
            <p>
              Displays, totens, wobblers, faixas e estruturas promocionais fazem
              parte desse tipo de comunicação.
            </p>
          </div>
          <div className={styles.imageBox}>
            <Image
              src="/images/pdv/herois/heroi3.webp"
              alt="Material de PDV em ambiente de loja"
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
              alt="Equipe Zoom produzindo materiais para PDV"
              width={1920}
              height={1080}
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Produção completa para ponto de venda</h2>
            <p>
              A Zoom atua na produção de materiais promocionais para PDV,
              garantindo qualidade, padronização e eficiência em escala.
            </p>
            <p>
              Desenvolvemos soluções que vão desde peças simples até projetos
              mais complexos, sempre com foco na execução e no impacto no ponto
              de venda.
            </p>
          </div>
        </div>
      </section>

      {/* Tipos de materiais de PDV */}
      <section className={styles.sectionModal}>
        <div className={styles.contentTypes}>
          <div className={styles.sectionHeader}>
            <h2>Soluções para presença no ponto de venda</h2>
          </div>
          <div className={styles.cardGrid}>
            {pdvTypes.map((item) => (
              <div key={item.title} className={styles.card}>
                <Image src={item.icon} alt="" width={32} height={32} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className={styles.sectionModal}>
        <div className={styles.contentHow}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.titleLight}>
              Como funciona a produção de materiais para PDV
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

      {/* Atuação em escala */}
      <section className={styles.sectionModal}>
        <div className={styles.contentRange}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.titleLight}>
              Produção e distribuição para PDV em todo o Brasil
            </h2>
            <p>
              Atendemos projetos em múltiplas cidades, garantindo padronização e
              controle na produção e distribuição de materiais para diferentes
              pontos de venda.
            </p>
            <p>
              Nossa operação permite escalar campanhas com consistência e
              eficiência.
            </p>
          </div>
         
        </div>
      </section>

      <section className={styles.sectionModal}>
        <Projects tag="PDV" />
      </section>
      <CtaTag />
    </>
  );
};

export default PdvDescription;
