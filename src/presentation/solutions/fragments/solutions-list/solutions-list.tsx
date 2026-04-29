"use client";
import { ButtonTag } from "@/components";
import { listSolutions } from "../../constants/solutions.constants";
import styles from "./solutions-list.module.scss";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

const SolutionsListComponent = () => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }

  return (
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
  );
};

export default SolutionsListComponent;
