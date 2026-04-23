"use client";

import { Projects } from "@/components/projects";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./pdv-description.module.scss";

const pdvTypes = [
  {
    icon: "🗂️",
    title: "Displays promocionais",
    desc: "Estruturas para destaque de produtos dentro do ambiente de venda.",
  },
  {
    icon: "🏛️",
    title: "Totens e expositores",
    desc: "Materiais que aumentam a visibilidade e organizam a comunicação no PDV.",
  },
  {
    icon: "🏷️",
    title: "Materiais de apoio",
    desc: "Faixas, wobblers, stoppers e outras peças que reforçam campanhas no ponto de venda.",
  },
  {
    icon: "✦",
    title: "Projetos personalizados",
    desc: "Desenvolvimento de soluções específicas para campanhas e ações promocionais.",
  },
];

const steps = [
  {
    n: "01",
    title: "Planejamento",
    desc: "Entendimento da campanha e definição dos materiais ideais.",
  },
  {
    n: "02",
    title: "Produção",
    desc: "Desenvolvimento com controle técnico e padronização.",
  },
  {
    n: "03",
    title: "Distribuição",
    desc: "Envio e organização logística para diferentes pontos de venda.",
  },
  {
    n: "04",
    title: "Implementação",
    desc: "Instalação e organização dos materiais no PDV.",
  },
];

const cities = [
  "São Paulo - SP",
  "Rio de Janeiro - RJ",
  "Belo Horizonte - MG",
  "Fortaleza - CE",
  "Curitiba - PR",
];

const projects = [
  {
    brand: "Marca A",
    type: "Display Promocional",
    img: "/images/senna.jpg",
  },
  {
    brand: "Marca B",
    type: "Totem",
    img: "/images/senna.jpg",
  },
  {
    brand: "Marca C",
    type: "Expositor",
    img: "/images/senna.jpg",
  },
  {
    brand: "Marca D",
    type: "Material de Apoio",
    img: "/images/senna.jpg",
  },
  {
    brand: "Marca E",
    type: "Display Promocional",
    img: "/images/senna.jpg",
  },
  {
    brand: "Marca F",
    type: "Projeto Especial",
    img: "/images/senna.jpg",
  },
];



export const PdvDescription = () => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }

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
              src="/images/process/urbano.png"
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
              width={260}
              height={260}
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
                <span className={styles.cardIcon}>{item.icon}</span>
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
          <div className={styles.citiesBlock}>
            {cities.map((c) => (
              <span key={c} className={styles.cityTag}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionModal}>
        <Projects tag="PDV" />
      </section>

     
      
    </>
  );
};

export default PdvDescription;