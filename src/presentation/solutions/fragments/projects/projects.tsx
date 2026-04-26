"use client";

import { ContentTag } from "@/components";
import styles from "./projects.module.scss";
import ProjHall from "./hall/proj-hall";
import ProjetosEspeciais from "./description/proj-description";

export const ProjectsComponent = () => {
  return (
    <>
      <div className={styles.projectsWrapper}>
        <ProjHall />
        <ContentTag colorTopPosition="right" colorBottomPosition="left">
          <ProjetosEspeciais />
        </ContentTag>
      </div>
    </>
  );
};

export default ProjectsComponent;
