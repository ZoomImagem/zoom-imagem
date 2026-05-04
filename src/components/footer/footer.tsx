"use client";

import Image from "next/image";
import { FiFacebook, FiInstagram, FiLinkedin, FiX } from "react-icons/fi";
import styles from "./footer.module.scss";
import { useRouter } from "next/navigation";

const FooterComponent = () => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.content}>
        <div className={styles.contentLogo}>
          <Image
            src="/images/logo-zoom.svg"
            alt="PlinApps"
            width={200}
            height={60}
          />
        </div>

        <ul className={styles.listInstitucional}>
          <li onClick={() => handleClick("/")}>Zoom</li>
          <li onClick={() => handleClick("/sobre")}>Sobre</li>
          <li onClick={() => handleClick("/portfolio")}>Portifólio</li>
          <li onClick={() => handleClick("/solucoes/linha-eco")}>Linha Eco</li>
        </ul>

        <ul className={styles.listSocialMobile}>
          <li>
            <a
              href="https://instagram.com/zoomimagembr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram size={22} color="#0d101b" />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/zoomimagem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiX size={22} color="#000000" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/zoomimagembr/?locale2=pt_PT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook size={22} color="#000000" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/company/zoom-imagem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin size={22} color="#000000" />
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.localization}>
        <p>
          <strong>São Paulo</strong>
          <br />
          Rua Paulo Emílio Salles Gomes, 45, - Limão São Paulo - SP, 02710-110,
          Brasil
        </p>

        <p>
          <strong>Lauro de Freitas</strong>
          <br />
          R. Prisco José de Souza, s/n - Lote Amp Recreio Ipitanga, Q 28 - Caji
          - Lauro de Freitas - BA, 42700-130, Brasil
        </p>
      </div>

      <div className={styles.contentSEO}>
        <ul className={styles.listSEO}>
          <li>Produção de OOH no Brasil</li>
          <li>Materiais para PDV</li>
          <li>Projetos especiais de comunicação visual</li>
          <li>Execução de campanhas publicitárias</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterComponent;
