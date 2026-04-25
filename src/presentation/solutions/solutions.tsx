"use client";

import { FiArrowRight } from "react-icons/fi";
import { listSolutions } from "./constants/solutions.constants";
import styles from "./solutions.module.scss";
import { ButtonTag } from "@/components";
import { useRouter } from "next/navigation";

export const SolutionsComponent = () => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }

  return (
    <>
      <div className={styles.solutionsWrapper}>
        <div className={styles.solutionsContent}>
          <div className={styles.solutionsTitle}>
            <h2>Serviços prestados pela Zoom Imagem</h2>
            <p>Conheça as principais soluções que a Zoom oferece</p>
          </div>
          <ul className={styles.solutionsItems}>
            {listSolutions.map((item, key) => (
              <li
                key={key}
                className={styles.item}
                style={{ backgroundImage: `url(${item.image})` }}
                onClick={() => handleClick(`/solucoes/${item.slug}`)}
              >
                <div className={styles.itemContent}>
                  <div className={styles.itemTitle}>
                    <p>{item.title}</p>
                  </div>
                  <ButtonTag
                    label="Ver mais"
                    size="lg"
                    variant="glass"
                    icon={<FiArrowRight size={24} color="#EE0874" />}
                    onClick={() => handleClick(`/solucoes/${item.slug}`)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SolutionsComponent;
