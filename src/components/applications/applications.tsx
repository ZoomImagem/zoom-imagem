import { ContentTag } from "@/components";
import styles from "./applications.module.scss";
import { items } from "./constants/aplications.constants";



const ApplicationsComponent = () => {
  return (
    <ContentTag colorBottomPosition="left">
      <section className={styles.contentAmbientes}>
        <div className={styles.header}>
          <h2 className={styles.title}>Onde sua marca pode estar</h2>
          <p className={styles.sub}>
            Aplicamos nossos projetos em diferentes ambientes, formatos e
            contextos — sempre com foco em presença e execução.
          </p>
        </div>

        <ul className={styles.contentAplications}>
          {items.map(({ icon: Icon, texto, image }) => (  
            <li key={texto} className={styles.card} style={{ backgroundImage: `url(${image})`}}>
              <span>
                <Icon size={24} />
              </span>
              <span className={styles.texto}>{texto}</span>
            </li>
          ))}
        </ul>
      </section>
    </ContentTag>
  );
};

export default ApplicationsComponent;
