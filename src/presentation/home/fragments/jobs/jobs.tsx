import { FiArrowRight } from "react-icons/fi";

import styles from "./jobs.module.scss";
import { useRouter } from "next/navigation";
import { SolutionsListTag } from "@/presentation/solutions/";
import { ContentTag } from "@/components";

const JobsComponent = () => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }

  return (
    <ContentTag colorTopPosition="left">
      <div className={styles.contentTitle}>
        <h2>
          <strong> Soluções completas </strong> em OOH, PDV e produção de
          materiais publicitários
        </h2>

        <div className={styles.contentArrow}>
          <div>
            <FiArrowRight size={16} color="black" />
          </div>{" "}
          <p onClick={() => handleClick("/solucoes")}>
            Confira nossas soluções
          </p>
        </div>
      </div>

      <SolutionsListTag />
    </ContentTag>
  );
};

export default JobsComponent;
