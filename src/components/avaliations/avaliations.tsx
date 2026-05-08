"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiFolder,
  FiStar,
} from "react-icons/fi";
import { ButtonTag } from "../button";
import styles from "./avaliations.module.scss";
import { ReviewsData } from "./constants/avaliations.constants";
import { useRouter } from "next/navigation";

const Stars = ({ rating }: { rating: number }) => (
  <div className={styles.stars}>
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i} className={i <= rating ? styles.star : styles.starEmpty}>
        ★
      </span>
    ))}
  </div>
);

const CARD_WIDTH = 280 + 16;

const Avatar = ({ name, photoUrl }: { name: string; photoUrl: string }) => {
  const [imgError, setImgError] = useState(false);
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  if (!photoUrl || imgError) {
    return <div className={styles.avatarFallback}>{initials}</div>;
  }

  return (
    <Image
      className={styles.avatar}
      src={photoUrl}
      alt={name}
      width={58}
      height={58}
      onError={() => setImgError(true)}
    />
  );
};

const AvaliationsComponent = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleClick = (link: string, external?: boolean) => {
  if (external) {
    window.open(link, "_blank");
  } else {
    router.push(link);
  }
};

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = Math.abs(e.changedTouches[0].clientY - touchStartY.current);
    if (Math.abs(deltaX) < 40 || deltaY > Math.abs(deltaX)) return;
    if (deltaX < 0) goTo(current + 1);
    else goTo(current - 1);
    touchStartX.current = null;
    touchStartY.current = null;
  };

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const update = () => {
      const w = wrapperRef.current?.offsetWidth ?? 600;
      setVisible(Math.max(1, Math.floor(w / CARD_WIDTH)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (loading)
    return <div className={styles.loading}>Carregando avaliações...</div>;
  if (error || !data)
    return (
      <div className={styles.error}>
        Não foi possível carregar as avaliações.
      </div>
    );

  const reviews = data.reviews;
  const totalSlides = Math.ceil(reviews.length / visible);

  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(idx, totalSlides - 1));
    setCurrent(clamped);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${clamped * visible * CARD_WIDTH}px)`;
    }
  };

  return (
    <section className={styles.avaliationsWrapper}>
      <div className={styles.contentAvaliations}>
        <div className={styles.headerAvaliations}>
          

          <div className={styles.summary}>
            <div className={styles.googleHeader}>
              <Image
                src="/images/google.png"
                alt="google"
                width={36}
                height={36}
              />
              <span className={styles.ratingNumber}>
                {data.rating.toFixed(1)}
              </span>
              <Stars rating={Math.round(data.rating)} />
              <span className={styles.totalRatings}>
                {data.user_ratings_total.toLocaleString("pt-BR")} avaliações no
                Google
              </span>
            </div>

            <ButtonTag
              label="Avalie-nos"
              size="lg"
              variant="secondary"
              onClick={() => handleClick("https://maps.app.goo.gl/PdSLNY6DxUegB1Dp6", true)}
              icon={<FiStar size={18} color="#EE0874" />}
            />
          </div>
        </div>

        <div className={styles.carouselOuter}>
          <FiChevronLeft
            size={44}
            color="#000"
            onClick={() => goTo(current - 1)}
            className={styles.ArrowsDisplay}
          />

          <div className={styles.carouselWrapper} ref={wrapperRef}>
            <div
              className={styles.cards}
              ref={trackRef}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {reviews.map((item, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.cardDescription}>
                    {item.text && (
                      <p className={styles.reviewText}>{item.text}</p>
                    )}
                  </div>
                  <div>
                    <Stars rating={item.rating} />
                    <div className={styles.cardHeader}>
                      <Avatar
                        name={item.author_name}
                        photoUrl={item.profile_photo_url}
                      />
                      <div className={styles.reviewer}>
                        <p className={styles.reviewerName}>
                          {item.author_name}
                        </p>
                        <p className={styles.reviewDate}>
                          {item.relative_time_description}
                        </p>
                      </div>
                      <Image
                        src="/images/google.png"
                        alt="google"
                        width={22}
                        height={22}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <FiChevronRight
            size={44}
            color="#000"
            onClick={() => goTo(current + 1)}
            className={styles.ArrowsDisplay}
          />
        </div>

        <div className={styles.dots}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`${styles.dot} ${
                index === current ? styles.dotActive : ""
              }`}
            />
          ))}
        </div>

        <div className={styles.buttonsCta}>
          <ButtonTag
            label="Fale com a gente"
            size="lg"
            variant="secondary"
            onClick={() => handleClick("/contato")}
            icon={<FiArrowRight size={24} color="#EE0874" />}
          />
          <ButtonTag
            label="Confira nossos projetos"
            size="lg"
            variant="secondary"
            onClick={() => handleClick("/portfolio")}
            icon={<FiFolder size={24} color="#EE0874" />}
          />
        </div>
      </div>
    </section>
  );
};

export default AvaliationsComponent;
