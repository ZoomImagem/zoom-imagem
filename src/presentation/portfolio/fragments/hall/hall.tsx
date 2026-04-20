"use client";

import { ButtonTag, CenterTag } from "@/components";
import { useRouter } from "next/navigation";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import styles from "./hall.module.scss";
import Image from "next/image";

export default function PortfolofioHall() {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }

  return (
    <>
      <section className={styles.contentHall}>
        <div className={styles.contentLeft}>
          <h1>Projetos que mostram nossa capacidade de execução.</h1>
          <p>
            Da mídia exterior ao ponto de venda, reunimos projetos executados{" "}
            <br /> em diferentes formatos, escalas e contextos.
          </p>
          <div className={styles.ctaHall}>
            <ButtonTag
              label="Fale com a Zoom"
              size="lg"
              variant="secondary"
              icon={<FiArrowRight size={24} color="#EE0874" />}
              onClick={() => handleClick("/contato")}
            />
          </div>
        </div>

        <div className={styles.contentRight}>
          <div className={styles.imageHall}>
            <Image
              className={styles.image}
              src="/images/projects/bauducco1.webp"
              alt=""
              width={400}
              height={400}
            />

            <div className={styles.ctaBadge}>
              <div className={styles.ctaBadgeIcon}>
                <FiCheck />
              </div>
              <div>
                <p className={styles.ctaBadgeTitle}>+500 projetos</p>
                <p className={styles.ctaBadgeSub}>entregues com sucesso</p>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
}
