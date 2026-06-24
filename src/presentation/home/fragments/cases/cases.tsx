import { FiArrowDownRight } from "react-icons/fi";
import styles from "./cases.module.scss";
import { useRouter } from "next/navigation";
import { ButtonTag, ContentTag } from "@/components";
import { projects, steps } from "./constants/cases.constants";

const CasesComponent = () => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }

  return (
    <ContentTag colorTopPosition="right">
      <div className={styles.contentTitle}>
        <h2>Projetos de OOH, PDV e ativações executados em todo o Brasil</h2>

        <span>
          Atuamos na produção e execução de campanhas publicitárias com foco em
          presença de marca, impacto visual e padronização em diferentes
          localidades.
        </span>
      </div>

      <ul className={styles.listCases}>
        {projects.map((item, index) => (
          <li
            onClick={() => handleClick(`${item.url}`)}
            key={index}
            className={styles.listCaseItem}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <h3>{item.title}</h3>

            <div className={styles.viewMore}>
              <p>ver mais + </p>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.process}>
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={index} className={styles.step}>
              <div className={styles.iconWrapper}>
                <Icon size={20} />
              </div>

              <div className={styles.content}>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.contentCopy}>
        <h3> Sua marca já deveria estar sendo vista. </h3>

        <div className={styles.copyDescription}>
          <p>
            Fale com uma equipe especializada em produção de{" "}
            <strong>OOH, PDV e projetos especiais </strong>e leve sua marca para
            os principais pontos de contato com o público.
          </p>

          <ButtonTag
            label="Entrar em contato"
            size="lg"
            variant="secondary"
            onClick={() => handleClick("/contato")}
            icon={<FiArrowDownRight size={24} color="#ee0874" />}
          />
        </div>
      </div>
    </ContentTag>
  );
};

export default CasesComponent;
