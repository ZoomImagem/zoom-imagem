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
    "/images/client-logo/99-branco.png",
    "/images/client-logo/vivo-branco.png",
    "/images/client-logo/heineken-branco.png",
    "/images/client-logo/bk-branco.png",
    "/images/client-logo/byd-branco.webp",
    "/images/client-logo/itau-branco.png",
    "/images/client-logo/santander-branco.png",
    "/images/client-logo/netflix-branco.png",
    "/images/client-logo/aws-branco.png",
    "/images/client-logo/99-branco.png",
    "/images/client-logo/vivo-branco.png",
    "/images/client-logo/heineken-branco.png",
    "/images/client-logo/bk-branco.png",
    "/images/client-logo/byd-branco.webp",
    "/images/client-logo/itau-branco.png",
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
          label="Falar com a Zoom"
          size="lg"
          variant="glass"
          icon={<FiArrowDownRight size={24} color="#EE0874" />}
          onClick={() => handleClick("/contato")}
        />
        <ButtonTag
          label="Ver projetos"
          size="lg"
          variant="glass"
          icon={<Folder size={20} color="#EE0874" />}
          onClick={() => handleClick("/portfolio")}
        />
      </div>
    </div>
  );
};

export default CarouselComponent;
