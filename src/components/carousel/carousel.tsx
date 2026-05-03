"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import styles from "./carousel.module.scss";
import { ButtonTag } from "../button";
import { FiArrowDownRight } from "react-icons/fi";
import { Folder } from "lucide-react";

const CarouselComponent = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const logos = [
    "/images/client-logo/santander-branco.png",
    "/images/client-logo/netflix-branco.png",
    "/images/client-logo/aws-branco.png",
    "/images/client-logo/99-white.png",
    "/images/client-logo/vivo-branco.png",
    "/images/client-logo/heineken-branco.png",
    "/images/client-logo/bk-branco.png",
    "/images/client-logo/byd-branco.webp",
    "/images/client-logo/itau-branco.png",
    "/images/client-logo/keeta.png",
    "/images/client-logo/ambev.png",
    "/images/client-logo/santander-branco.png",
    "/images/client-logo/netflix-branco.png",
    "/images/client-logo/aws-branco.png",
    "/images/client-logo/99-white.png",
    "/images/client-logo/vivo-branco.png",
    "/images/client-logo/heineken-branco.png",
    "/images/client-logo/bk-branco.png",
    "/images/client-logo/byd-branco.webp",
    "/images/client-logo/itau-branco.png",
    "/images/client-logo/keeta.png",
    "/images/client-logo/ambev.png",
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    const speed = 1.2;

    const animate = () => {
      position -= speed;

      const width = track.scrollWidth / 2;

      if (Math.abs(position) >= width) {
        position += width;
      }

      track.style.transform = `translateX(${position}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }

  return (
    <div className={styles.clientsWrapper}>
      <div ref={trackRef} className={styles.track}>
        {[...logos, ...logos, ...logos, ...logos, ...logos].map(
          (logo, index) => (
            <div key={index} className={styles.item}>
              <Image
                src={logo}
                alt=""
                width={140}
                height={140}
                onClick={() => handleClick("/portfolio")}
              />
            </div>
          ),
        )}
      </div>

      <div className={styles.clientesCta}>
        <ButtonTag
          label="Fale com a gente"
          size="lg"
          variant="primary"
          icon={<FiArrowDownRight size={24} color="#191919" />}
          onClick={() => handleClick("/contato")}
        />
        <ButtonTag
          label="Veja nossos projetos"
          size="lg"
          variant="primary"
          icon={<Folder size={20} color="#191919" />}
          onClick={() => handleClick("/portfolio")}
        />
      </div>
    </div>
  );
};

export default CarouselComponent;
