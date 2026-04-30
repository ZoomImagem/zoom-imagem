import { FiArrowDown } from "react-icons/fi";

import { ButtonTag, CenterTag } from "@/components";
import { useRouter } from "next/navigation";
import styles from "./hall.module.scss";

const HallComponent = () => {
  const handleScroll = () => {
    const next = document.getElementById("role");
    next?.scrollIntoView({ behavior: "smooth" });
  };
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }
  return (
    <>
      <CenterTag>
        <div className={styles.hallWrapper}>
          <h1 className={styles.hallTitle}>
            Transformamos presença em percepção de marca com projetos de OOH,
            PDV e ativações em todo o Brasil.
          </h1>

          <h1 className={styles.hallTitleDesktop}>
            Transformamos presença em percepção de marca com projetos de OOH,
            PDV e ativações em todo o Brasil. <br />
          </h1>

          <p className={styles.hallDescriptionMobile}>
            Planejamos, produzimos e executamos projetos que colocam sua marca
            no mundo real — com impacto, consistência e controle em cada etapa
          </p>

          <div className={styles.ctaButtons}>
            <ButtonTag
              label="Fale com a gente"
              size="lg"
              variant="primary"
              onClick={() => handleClick("/contato")}
            />

            <ButtonTag
              label="Veja nossos projetos"
              size="lg"
              variant="primary"
              onClick={() => handleClick("/portfolio")}
            />
          </div>

          <div className={styles.boxInfo}>
            <div className={styles.hallContentDescriptionDesktop}>
              <p>
                Planejamos, produzimos e executamos projetos que colocam sua
                marca no mundo real — com impacto, consistência e controle em
                cada etapa
              </p>
            </div>
            <div className={styles.contentButtonOvalMobile}>
              <a onClick={() => handleScroll()} className={styles.buttonDown}>
                <FiArrowDown size={40} color="#1E1E1E" />
              </a>
            </div>
          </div>
        </div>
      </CenterTag>
    </>
  );
};

export default HallComponent;
