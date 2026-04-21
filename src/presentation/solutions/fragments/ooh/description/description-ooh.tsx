"use client";

import { ButtonTag } from "@/components";
import { Projects } from "@/components/projects";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import styles from "./description-ooh.module.scss";

const oohTypes = [
  {
    icon: "🪧",
    title: "Outdoors",
    desc: "Produção e instalação de campanhas em outdoor com alta visibilidade e alcance.",
  },
  {
    icon: "💡",
    title: "Painéis e Frontlights",
    desc: "Estruturas de grande formato para campanhas de impacto.",
  },
  {
    icon: "🏙️",
    title: "Mobiliário Urbano",
    desc: "Presença em pontos estratégicos da cidade, como abrigos de ônibus e relógios urbanos.",
  },
  {
    icon: "✦",
    title: "Projetos personalizados",
    desc: "Execuções sob medida para campanhas que exigem soluções diferenciadas.",
  },
];

const steps = [
  {
    n: "01",
    title: "Planejamento",
    desc: "Definição da melhor estratégia de presença para a campanha.",
  },
  {
    n: "02",
    title: "Produção",
    desc: "Desenvolvimento dos materiais com controle técnico e qualidade.",
  },
  {
    n: "03",
    title: "Instalação",
    desc: "Execução em campo com equipe especializada.",
  },
  {
    n: "04",
    title: "Acompanhamento",
    desc: "Garantia de padrão e correta implementação.",
  },
];

const cities = ["São Paulo - SP", "Rio de Janeiro - RJ", "Belo Horizonte - MG", "Fortaleza - CE", "Curitiba - PR"]



export const OohDescription = () => {
  const router = useRouter();
  
    function handleClick(link: string) {
      router.push(link);
    }
  return (
    <>
      {/* O que é OOH */}
      <section className={styles.sectionModal}>
        <div className={styles.contentWhat}>
          <div className={styles.textBlock}>
           
            <h2>O que é OOH (Out of Home)?</h2>
            <p>
              OOH (Out of Home) é toda forma de publicidade realizada fora de
              casa, como outdoors, painéis, mobiliário urbano e outras soluções
              de mídia exterior.
            </p>
            <p>
              Esse tipo de mídia é utilizado para aumentar a visibilidade da
              marca, gerar reconhecimento e impactar o público em pontos
              estratégicos do dia a dia.
            </p>
          </div>
          <div className={styles.imageBox}>
            <Image
              src="/images/process/urbano.png"
              alt="Mídia OOH em ambiente urbano"
              width={260}
              height={260}
              className={styles.image}
            />
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className={styles.sectionModal}>
        <Projects tag="OOH"/>
      </section>

      {/* O que a Zoom faz */}
      <section className={styles.sectionModal}>
        <div className={styles.contentAtuation}>
          <div className={styles.imageBox}>
            <Image
              src="/images/senna.jpg"
              alt="Equipe Zoom executando campanha OOH"
              width={260}
              height={260}
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
          
            <h2>Execução completa de campanhas de OOH</h2>
            <p>
              A Zoom atua na produção e execução de projetos de OOH, garantindo
              que cada campanha seja implementada com padrão, agilidade e
              consistência — independentemente da localização.
            </p>
            <p>
              Cuidamos de todas as etapas, da preparação dos materiais à
              instalação final.
            </p>
          </div>
        </div>
      </section>

      {/* Tipos de OOH */}
      <section className={styles.sectionModal}>
        <div className={styles.contentTypes}>
          <div className={styles.sectionHeader}>
            <h2>Soluções em mídia exterior</h2>
          </div>
          <div className={styles.cardGrid}>
            {oohTypes.map((item) => (
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
      <section  className={styles.sectionModal}>
        <div className={styles.contentHow}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.titleLight}>
              Como funciona a execução de OOH
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
            <h2 className={styles.titleLight}>Execução de OOH em todo o Brasil</h2>
            <p>
              Atendemos projetos em diferentes regiões do Brasil, garantindo
              padronização, controle e eficiência mesmo em campanhas de grande
              escala.
            </p>
            <p>
              Nossa estrutura permite executar ações simultâneas em múltiplas
              cidades com consistência.
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

      

     
    </>
  );
};

export default OohDescription;
