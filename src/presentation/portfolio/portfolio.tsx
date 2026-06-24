import { ContentTag } from "@/components";
import { Projects } from "@/components/projects";
import { PortfolofioHall } from "./fragments/hall";
import styles from "./portfolio.module.scss";
import { ApplicationsTag } from "@/components/applications";
import { CtaTag } from "@/components/cta";

export const PortfolioComponent = () => {
  return (
    <div className={styles.portfolioWrapper}>
      <PortfolofioHall />

      <div className={styles.introductionWrapper}>
        <div className={styles.descIntroduction}>
          <h2>
            Cada projeto responde a uma necessidade específica de marca,
            ambiente e operação
          </h2>
          <p>
            Execuções em OOH, PDV, projetos especiais, mobiliário urbano,
            eventos e outras aplicações
          </p>
        </div>
      </div>

      <ContentTag colorTopPosition="right">
        <Projects tag="Todos" />
      </ContentTag>
      <ApplicationsTag />

      <ContentTag colorTopPosition="right">
        <CtaTag />
      </ContentTag>
    </div>
  );
};

export default PortfolioComponent;
