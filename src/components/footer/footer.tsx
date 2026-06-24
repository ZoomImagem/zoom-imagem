"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import styles from "./footer.module.scss";

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
          <li onClick={() => handleClick("/conteudos")}>Saiu na Mídia</li>
          <li onClick={() => handleClick("/portfolio")}>Portifólio</li>
          <li onClick={() => handleClick("/contato")}>Contato</li>
        </ul>

        <div className={styles.socialContent}>
          <span>Nossas redes sociais</span>
          <ul className={styles.listSocialMobile}>
            <li>
              <a
                href="https://instagram.com/zoomimagembr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram size={22} color="#000" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@zoomimagem8948"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiYoutube size={22} color="#000000" />
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
      </div>

      <div className={styles.localization}>
        <p>
          <strong>São Paulo</strong>
          <br />
          Rua Paulo Emílio Salles Gomes, 45, - Limão São Paulo - SP, 02710-110,
          Brasil
          <br />
          <a href="tel:+551135695725">(11) 3569-5725</a>
        </p>

        <p>
          <strong>Salvador</strong>
          <br />
          R. Prisco José de Souza, s/n - Lote Amp Recreio Ipitanga, Q 28 - Caji
          - Lauro de Freitas - BA, 42700-130, Brasil
          <br />
          <a href="tel:+557136167555">(71) 3616-7555</a>
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
