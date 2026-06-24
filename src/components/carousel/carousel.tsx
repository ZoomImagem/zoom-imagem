"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import styles from "./carousel.module.scss";

const CarouselComponent = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const logos = [
    { src: "/images/client-logo/santander-branco.png", large: true },
    { src: "/images/client-logo/netflix-branco.png", large: false },
    { src: "/images/client-logo/aws-branco.png", large: true },
    { src: "/images/client-logo/99-white.png", large: false },
    { src: "/images/client-logo/vivo-branco.png", large: false },
    { src: "/images/client-logo/heineken-branco.png", large: false },
    { src: "/images/client-logo/bk-branco.png", large: true },
    { src: "/images/client-logo/byd-branco.webp", large: false },
    { src: "/images/client-logo/itau-branco.png", large: true },
    { src: "/images/client-logo/keeta.png", large: false },
    { src: "/images/client-logo/ambev.png", large: false },
    { src: "/images/client-logo/santander-branco.png", large: true },
    { src: "/images/client-logo/netflix-branco.png", large: false },
    { src: "/images/client-logo/aws-branco.png", large: true },
    { src: "/images/client-logo/99-white.png", large: false },
    { src: "/images/client-logo/vivo-branco.png", large: false },
    { src: "/images/client-logo/heineken-branco.png", large: false },
    { src: "/images/client-logo/bk-branco.png", large: true },
    { src: "/images/client-logo/byd-branco.webp", large: false },
    { src: "/images/client-logo/itau-branco.png", large: true },
    { src: "/images/client-logo/keeta.png", large: false },
    { src: "/images/client-logo/ambev.png", large: false },
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
              <div
                className={
                  logo.large ? styles.logoWrapperLarge : styles.logoWrapper
                }
              >
                <Image
                  src={logo.src}
                  alt=""
                  width={140}
                  height={140}
                  onClick={() => handleClick("/portfolio")}
                />
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default CarouselComponent;
