import Image from "next/image";
import { FiFacebook, FiInstagram, FiLinkedin, FiX } from "react-icons/fi";
import styles from "./footer.module.scss";

const FooterComponent = () => {
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
          <li>Zoom</li>
          <li>Sobre</li>
          <li>Notícias</li>
          <li>Portifólio</li>
          <li>Linha Eco</li>
        </ul>

        <ul className={styles.listSocialMobile}>
          <li>
            <div>
              <FiInstagram size={22} color="#000000" />
            </div>
          </li>
          <li>
            <div>
              <FiX size={22} color="#000000" />
            </div>
          </li>
          <li>
            <div>
              <FiFacebook size={22} color="#000000" />
            </div>
          </li>

          <li>
            <div>
              <FiLinkedin size={22} color="#000000" />
            </div>
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
