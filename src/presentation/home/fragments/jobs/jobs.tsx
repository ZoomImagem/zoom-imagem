import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import styles from "./jobs.module.scss";
import { IListServices, listServices } from "./constants/jobs.constants";
import { ContentTag, CheckboxTag } from "@/components";
import { useRouter } from "next/navigation";

const JobsComponent = () => {
  const [activeService, setActiveService] = useState<IListServices>(
    listServices[1],
  );

  const handleActiveService = (service: IListServices) => {
    setActiveService(service);
  };

  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }

  return (
    <ContentTag colorTopPosition="left">
      <div className={styles.contentTitle}>
        <h2>
          <strong> Soluções completas </strong> em OOH, PDV e produção de
          materiais publicitários
        </h2>

        <div className={styles.contentArrow}>
          <div>
            <FiArrowRight size={16} color="black" />
          </div>{" "}
          <p onClick={() => handleClick("/portfolio")}>
            Confira nossos projetos
          </p>
        </div>
      </div>

      <div className={styles.contentServicesDesktop}>
        <div className={styles.contentPagination}>
          <div className={styles.paginator}></div>

          <ul className={styles.listServices}>
            {listServices.map((item, key) => (
              <li
                key={key}
                className={clsx(
                  item.service === activeService.service &&
                    styles.activeService,
                )}
                onClick={() => handleActiveService(item)}
              >
                {item.service}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.serviceItem}>
          <h2>{activeService.service}</h2>

          <Image
            src={activeService.imgDeskt}
            width={500}
            height={300}
            alt="Serviço"
          />

          <p>{activeService.descriptionJob}</p>

          <ul className={styles.listChecks}>
            {activeService.listCheck.map((item, key) => (
              <li key={key}>
                <CheckboxTag
                  label={<span className={styles.labelCheck}>{item}</span>}
                  onChange={function () {}}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div></div>

      <div className={styles.contentServicesMobile}>
        {listServices.map((service, key) => (
          <div className={styles.serviceItem} key={key}>
            <h2>{service.service}</h2>

            <Image
              src={activeService.imgMobile}
              width={300}
              height={250}
              alt="Serviço"
            />

            <p>{service.descriptionJob}</p>

            <ul className={styles.listChecks}>
              {service.listCheck.map((item, key) => (
                <li key={key}>
                  <CheckboxTag
                    label={<span className={styles.labelCheck}>{item}</span>}
                    onChange={function () {}}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ContentTag>
  );
};

export default JobsComponent;
