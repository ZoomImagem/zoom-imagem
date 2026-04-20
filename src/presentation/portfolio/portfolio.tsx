import { ContentTag } from "@/components";
import { Projects } from "@/components/projects";
import { PortfolofioHall } from "./fragments/hall";
import styles from "./portfolio.module.scss";
import { ApplicationsTag } from "@/components/applications";

export const PortfolioComponent = () => {
  return (
    <div className={styles.portfolioWrapper}>
      <PortfolofioHall />

      <ApplicationsTag />

      <ContentTag colorTopPosition="right">
        <Projects tag="Todos" />
      </ContentTag>
    </div>
  );
};

export default PortfolioComponent;
