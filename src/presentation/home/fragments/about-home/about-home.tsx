import { useRouter } from "next/navigation";
import {
  FiArrowDownRight,
  FiCheckCircle,
  FiClock,
  FiMap,
  FiSettings,
} from "react-icons/fi";
import {
  LuAward,
  LuBriefcaseBusiness,
  LuMapPinCheck,
  LuWrench,
} from "react-icons/lu";

import { ButtonTag, CarouselTag, ContentTag } from "@/components";
import styles from "./about-home.module.scss";

const AboutHomeComponent = () => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }
  return (
    <div id="role">
      <ContentTag colorBottomPosition="right" colorTopPosition="right">
        <div className={styles.contentPurpose}>
          <span>Aqui, sua marca ganha presença.</span>

          <h2>
            Atuamos com produção de materiais para OOH, PDV e projetos especiais
            em todo o Brasil,{" "}
            <strong>
              {" "}
              garantindo padrão, agilidade e execução com qualidade em escala.
            </strong>
          </h2>
        </div>

        <ul className={styles.contentSkills}>
          <li>
            <FiSettings size={32} color="#ED0874" className={styles.icons} />

            <h3>Produção própria </h3>

            <p>
              Controle total na produção de materiais publicitários e projetos
              especiais.
            </p>
          </li>
          <li>
            <FiMap size={32} color="#ED0874" className={styles.icons} />

            <h3>Cobertura nacional</h3>

            <p>
              Execução de campanhas e instalações em diferentes regiões do
              Brasil.
            </p>
          </li>
          <li>
            <FiClock size={32} color="#ED0874" className={styles.icons} />

            <h3>Agilidade na entrega</h3>

            <p>
              Processos otimizados para produção e instalação dentro do prazo.
            </p>
          </li>
          <li>
            <FiCheckCircle size={32} color="#ED0874" className={styles.icons} />

            <h3>Qualidade de ponta a ponta</h3>

            <p>
              Do planejamento à execução, cada etapa é acompanhada de perto.
            </p>
          </li>
        </ul>

        <div className={styles.ctaSkills}>
          <button onClick={() => handleClick("/portfolio")}>
            Confira nossos projetos
          </button>
          <button onClick={() => handleClick("/contato")}>
            Entre em contato
          </button>
        </div>

        <h2 className={styles.ourClients}>Nossos clientes</h2>
        <CarouselTag />
        <div className={styles.weResults}>
          <span>Nossos Resultados</span>

          <h2 className={styles.subtitleMob}>
            <strong>Confira alguns números do que </strong>
            somos capazes de fazer
          </h2>

          <h2 className={styles.subtitleDesk}>
            <strong>Confira alguns números do que </strong>
            <br /> somos capazes de fazer
          </h2>
        </div>
        <ul className={styles.contentNumberServices}>
          <li>
            <LuBriefcaseBusiness
              size={40}
              color="#EE0874"
              className={styles.icons}
            />

            <span>+2.000</span>

            <p>projetos executados</p>
          </li>
          <li>
            <LuMapPinCheck size={40} color="#EE0874" className={styles.icons} />

            <span>+120</span>

            <p>cidades atendidas</p>
          </li>
          <li>
            <LuWrench size={40} color="#EE0874" className={styles.icons} />

            <span>+15.000</span>

            <p>pontos instalados</p>
          </li>
          <li>
            <LuAward size={40} color="#EE0874" className={styles.icons} />

            <span>+24</span>

            <p>anos de atuação</p>
          </li>
        </ul>
        <div className={styles.contentCopy}>
          <h3>
            <strong>Acelere os resultados</strong> da sua empresa
          </h3>

          <div className={styles.copyDescription}>
            <p>
              Descubra como podemos criar soluções digitais sob medida e
              impulsionar seu negócio.{" "}
              <strong>Entre em contato agora mesmo!</strong>
            </p>

            <ButtonTag
              label="Entrar em contato"
              size="lg"
              variant="tertiary"
              onClick={() => handleClick("/contato")}
              icon={<FiArrowDownRight size={24} color="#EE0874" />}
            />
          </div>
        </div>
      </ContentTag>
    </div>
  );
};

export default AboutHomeComponent;
