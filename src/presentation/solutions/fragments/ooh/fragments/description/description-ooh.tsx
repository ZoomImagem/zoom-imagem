"use client";

import { ButtonTag } from "@/components";
import { CtaTag } from "@/components/cta";
import { Projects } from "@/components/projects";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import { oohTypes, steps } from "./constants/desc-ooh.constants";
import styles from "./description-ooh.module.scss";

export const OohDescription = () => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }

  return (
    <>
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
              src="/images/ooh/intelbras/intelbras1.webp"
              alt="Mídia OOH em ambiente urbano"
              width={1920}
              height={1080}
              className={styles.image}
            />
          </div>
        </div>
      </section>

      <section className={styles.sectionModal}>
        <Projects tag="OOH" />
      </section>

      <section className={styles.sectionModal}>
        <div className={styles.contentAtuation}>
          <div className={styles.imageBox}>
            <Image
              src="/images/projetos-especiais/tartarugas-ninja/tartaruga1.jpg"
              alt="Equipe Zoom executando campanha OOH"
              width={1920}
              height={1080}
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

        <div className={styles.buttonsCta}>
          <p className={styles.projectsCtaText}>
            Quer ver mais projetos ou discutir o seu?
          </p>
          <ButtonTag
            label="Falar com a Zoom"
            size="lg"
            variant="primary"
            icon={<FiArrowRight size={22} color="#000" />}
            onClick={() => handleClick("/contato")}
          />
          <ButtonTag
            label="Ver mais projetos"
            size="lg"
            variant="primary"
            icon={<FiArrowRight size={22} color="#000" />}
            onClick={() => handleClick("/portfolio")}
          />
        </div>
      </section>

      <section className={styles.sectionModal}>
        <div className={styles.contentTypes}>
          <div className={styles.sectionHeader}>
            <h2>Soluções em mídia exterior</h2>
          </div>
          <div className={styles.cardGrid}>
            {oohTypes.map((item) => (
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
            <h2 className={styles.titleLight}>
              Execução de OOH em todo o Brasil
            </h2>
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
        </div>

        <CtaTag />
      </section>
    </>
  );
};

export default OohDescription;
