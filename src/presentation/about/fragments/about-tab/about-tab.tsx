"use client";

import Image from "next/image";
import { IconType } from "react-icons";
import {
  FiArrowDownRight,
  FiArrowRight,
  FiClipboard,
  FiEye,
  FiMapPin,
  FiPlay,
  FiSettings,
} from "react-icons/fi";
import styles from "./about-tab.module.scss";
import { ButtonTag, CarouselTag, ContentTag } from "@/components";
import { CtaTag } from "@/components/cta";
import { ecoFeatures, homologacoes } from "../../contants/about.const";
import { LuPlaneTakeoff, LuTrainFront } from "react-icons/lu";
import { useRouter } from "next/navigation";
import React from "react";
import { clientsMobile, features } from "./constants/about-tab.constants";

interface Stage {
  id: string;
  phase?: string;
  icon: IconType;
  label: string;
  tools: string[];
  color: "bubleColor";
}

const stages: Stage[] = [
  {
    id: "plan",
    phase: "Planejamento",
    icon: FiClipboard,
    label: "Planejamento técnico",
    tools: ["Cada projeto é pensado para funcionar na prática"],
    color: "bubleColor",
  },
  {
    id: "prod",
    phase: "Produção",
    icon: FiSettings,
    label: "Produção própria",
    tools: ["Controle total sobre qualidade, prazo e execução"],
    color: "bubleColor",
  },

  {
    id: "exec",
    phase: "Execução",
    icon: FiPlay,
    label: "Execução em campo",
    tools: ["Equipe preparada para implementar com padrão"],
    color: "bubleColor",
  },
  {
    id: "acc",
    phase: "Acompanhamento",
    icon: FiEye,
    label: "Acompanhamento",
    tools: ["Monitoramento para garantir qualidade"],
    color: "bubleColor",
  },
];

const Arrow: React.FC = () => (
  <div className={styles.arrow}>
    <span className={styles.dot} />
    <span className={styles.dot} />
    <span className={styles.dot} />
    <span className={styles.arrowHead} />
  </div>
);

const AboutTabComponent = () => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }
  return (
    <ContentTag colorTopPosition="right" colorBottomPosition="left">
      <div className={styles.contentAbout}>
        <div className={styles.imageAbout}>
          <Image
            alt="Sobre nós"
            src="/images/projetos-especiais/stranger-things/stranger2.webp"
            width={560}
            height={664}
          />
        </div>

        <div className={styles.aboutDescription}>
          <span>Sobre Nós</span>

          <h2>
            Somos a <strong>Zoom</strong>
          </h2>

          <p>
            A Zoom iniciou suas atividades em 2000, atuando na produção gráfica
            de grandes formatos para mobiliário urbano.
            <br />
            Ao longo dos anos, evoluímos nossa estrutura e nos especializamos na
            execução de projetos de comunicação em escala, com foco em OOH, PDV
            e projetos especiais.
            <br />
            Hoje, contamos com um parque gráfico de alta capacidade e uma
            operação preparada para atender demandas em diferentes regiões do
            Brasil.
            <br />
            Com mais de duas décadas de atuação, a Zoom se consolidou como uma
            das principais empresas do país na produção para mobiliário urbano,
            atendendo grandes agências e marcas nas principais capitais.
            <br />
            Com unidades em São Paulo e Salvador, garantimos operação
            consistente em diferentes regiões do país.
          </p>
          <div className={styles.buttonContact}>
            <ButtonTag
              variant="primary"
              label="Impulsionar meu negócio"
              size="lg"
              icon={<FiArrowDownRight size={24} color="#000" />}
              onClick={() => handleClick("/contato")}
            />
          </div>
        </div>
      </div>

      <h2 className={styles.subititles}>Como operamos</h2>

      <div className={styles.contentOperations}>
        {stages.map((stage, index) => {
          const Icon = stage.icon;

          return (
            <React.Fragment key={stage.id}>
              <div className={styles.stageCol}>
                {stage.phase && (
                  <p className={styles.bubbleTitle}>{stage.phase}</p>
                )}
                {!stage.phase && <div className={styles.phaseEmpty} />}

                <div className={`${styles.bubble} ${styles[stage.color]}`}>
                  <span className={styles.bubbleLabel}>
                    <Icon size={34} />
                    {stage.label && (
                      <p className={styles.label}>{stage.label}</p>
                    )}
                  </span>
                </div>

                {stage.tools.length > 0 && (
                  <ul className={styles.tools}>
                    {stage.tools.map((tool, i) => (
                      <li key={i}>{tool}</li>
                    ))}
                  </ul>
                )}
              </div>

              {index < stages.length - 1 && <Arrow />}
            </React.Fragment>
          );
        })}
      </div>

      <h2 className={styles.subititles}>Capacidade e escala</h2>

      <div className={styles.contentCapacity}>
        <div className={styles.descriptionCapacity}>
          <p>
            Atendemos projetos em diferentes regiões do Brasil, com capacidade
            de executar campanhas simultâneas mantendo padronização e qualidade.
          </p>

          <p>
            Nossa estrutura permite presença consistente, independentemente da
            escala.
          </p>
        </div>
        <div className={styles.imageCapacityWrapper}>
          <Image
            className={styles.imageCapacity}
            alt="Mapa do Brasil"
            src="/images/maps.png"
            width={3962}
            height={4118}
          />
        </div>
      </div>

      <h2 className={styles.subititles}>DIFERENCIAIS</h2>

      <div className={styles.contentDifferencials}>
        <div className={styles.ImageWrapper}>
          <div className={styles.imageCard} />
          <div className={`${styles.imageCard2} ${styles.imageCardOffset}`} />
        </div>

        <div className={styles.contentFeatures}>
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Icon size={20} />
              </div>
              <div className={styles.featureText}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className={styles.subititles}>RESPONSABILIDADE NA EXECUÇÃO</h2>

      <div className={styles.contentDifferencials}>
        <div className={styles.ImageWrapper}>
          <div className={styles.imageCard} />
          <div className={`${styles.imageCard2} ${styles.imageCardOffset}`} />
        </div>

        <div className={styles.contentFeatures}>
          {ecoFeatures.map(({ icon: Icon, title, description }) => (
            <div key={title} className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Icon size={20} />
              </div>
              <div className={styles.featureText}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className={styles.subititles}>NOSSAS HOMOLOGAÇÕES</h2>

      <div className={styles.contentHomologacoes}>
        <div className={styles.homologacaoGroup}>
          <div className={styles.homologacaoGroupHeader}>
            <LuTrainFront size={22} color="#ED0874" />
            <h3>Metrô & Trem</h3>
          </div>
          <div className={styles.homologacaoCards}>
            {homologacoes.metro.map(({ label, sublabel }) => (
              <div key={label} className={styles.homologacaoCard}>
                <FiMapPin size={16} color="#ED0874" />
                <div>
                  <strong>{label}</strong>
                  <span>{sublabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.homologacaoGroup}>
          <div className={styles.homologacaoGroupHeader}>
            <LuPlaneTakeoff size={22} color="#ED0874" />
            <h3>Aeroportos</h3>
          </div>
          <div className={styles.homologacaoCards}>
            {homologacoes.aeroportos.map(({ label, sublabel }) => (
              <div key={label} className={styles.homologacaoCard}>
                <FiMapPin size={16} color="#ED0874" />
                <div>
                  <strong>{label}</strong>
                  <span>{sublabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className={styles.subititles}>
        Atuamos com marcas de diferentes segmentos, com foco em execução
        consistente
      </p>

      <div className={styles.ourClientsMobile}>
        {clientsMobile.map((client) => (
          <div key={client.name}>
            <Image
              src={client.src}
              alt={client.name}
              width={120}
              height={60}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>

      <div className={styles.carouselDisplay}>
        <CarouselTag />
      </div>
      <div className={styles.buttonsCta}>
        <ButtonTag
          label="Confira nossos projetos"
          size="lg"
          variant="primary"
          onClick={() => handleClick("/portfolio")}
          icon={<FiArrowRight size={24} color="#EE0874" />}
        />
      </div>

      <CtaTag />
    </ContentTag>
  );
};

export default AboutTabComponent;
