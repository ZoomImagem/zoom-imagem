"use client";
import { ButtonTag } from "@/components";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import { listContents } from "../../constants/contents.constants";
import styles from "./contents-list.module.scss";

const ContentsListComponent = () => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }

  return (
    <ul className={styles.contentsItems}>
      {listContents.map((item, key) => (
        <li
          key={key}
          className={styles.item}
          style={{ backgroundImage: `url(${item.image})` }}
          onClick={() => handleClick(`/conteudos/${item.slug}`)}
        >
          <div className={styles.itemContent}>
            <div className={styles.itemTitle}>
              <p>{item.title}</p>
            </div>
            <ButtonTag
              label="Ver mais"
              size="lg"
              variant="primary"
              icon={<FiArrowRight size={24} color="#191919" />}
              onClick={() => handleClick(`/conteudos/${item.slug}`)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContentsListComponent;
