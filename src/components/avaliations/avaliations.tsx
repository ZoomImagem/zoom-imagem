"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiFolder } from "react-icons/fi";
import { ButtonTag } from "../button";
import styles from "./avaliations.module.scss";
import { ReviewsData } from "./constants/avaliations.constants";
import { useRouter } from "next/navigation";

const Stars = ({
  rating,

}: {
  rating: number;
}) => {

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= rating ? styles.star : styles.starEmpty}>
          ★
        </span>
      ))}
    </div>
  );
};

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

  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = Math.abs(e.changedTouches[0].clientY - touchStartY.current);

    if (Math.abs(deltaX) < 40 || deltaY > Math.abs(deltaX)) return;

    if (deltaX < 0) next();
    else prev();

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

  if (loading) {
    return <div className={styles.loading}>Carregando avaliações...</div>;
  }

  if (error || !data) {
    return (
      <div className={styles.error}>
        Não foi possível carregar as avaliações.
      </div>
    );
  }

  const prev = () => {
    setDirection("right");
    setCurrent((c) => (c === 0 ? data.reviews.length - 1 : c - 1));
  };
  const next = () => {
    setDirection("left");
    setCurrent((c) => (c === data.reviews.length - 1 ? 0 : c + 1));
  };

  const review = data.reviews[current];

  return (
    <section className={styles.avaliationsWrapper}>
      <div className={styles.contentAvaliations}>

        <div className={styles.headerAvaliations}>
          <h2>O que nossos clientes dizem</h2>

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
            </div>

            <span className={styles.totalRatings}>
              {data.user_ratings_total.toLocaleString("pt-BR")} avaliações no
              Google
            </span>
          </div>

        </div>

        <div className={styles.grid}>
          <FiChevronLeft
            size={44}
            color="#000"
            onClick={prev}
            className={styles.ArrowsDisplay}
          />

          <div
            key={current}
            className={`${styles.card} ${direction === "left" ? styles.slideLeft : styles.slideRight}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className={styles.cardDescription}>
              {review.text && (
                <p className={styles.reviewText}>{review.text}</p>
              )}
            </div>
            <div>
              <Stars rating={review.rating} />
              <div className={styles.cardHeader}>
                <Avatar
                  name={review.author_name}
                  photoUrl={review.profile_photo_url}
                />
                <div className={styles.reviewer}>
                  <p className={styles.reviewerName}>{review.author_name}</p>
                  <p className={styles.reviewDate}>
                    {review.relative_time_description}
                  </p>

                </div>
                <Image
                  src="/images/google.png"
                  alt="google"
                  width={36}
                  height={36}
                />
              </div>
            </div>

          </div>
          <div className={styles.dots}>
            {data.reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`${styles.dot} ${index === current ? styles.dotActive : ""}`}
              />
            ))}
          </div>
          <FiChevronRight
            size={44}
            color="#000"
            onClick={next}
            className={styles.ArrowsDisplay}
          />
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
