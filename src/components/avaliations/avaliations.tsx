"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./avaliations.module.scss";
import { ReviewsData } from "./constants/avaliations.constants";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import { Pointer } from "lucide-react";

const Stars = ({
  rating,
  size = "normal",
}: {
  rating: number;
  size?: "normal" | "small";
}) => {
  const starClass = size === "small" ? styles.cardStar : styles.star;
  const emptyClass = size === "small" ? styles.cardStarEmpty : styles.starEmpty;

  return (
    <div className={size === "small" ? styles.cardStars : styles.stars}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= rating ? starClass : emptyClass}>
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
      src={photoUrl}
      alt={name}
      width={90}
      height={90}
      // className={styles.avatar}
      onError={() => setImgError(true)}
    />
  );
};

const AvaliationsComponent = () => {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [current, setCurrent] = useState(0);

  // Adiciona estes hooks/estado junto aos existentes
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

    // Ignora se foi mais vertical que horizontal (scroll da página)
    if (Math.abs(deltaX) < 40 || deltaY > Math.abs(deltaX)) return;

    if (deltaX < 0)
      next(); // swipe ← = próximo
    else prev(); // swipe → = anterior

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

  const prev = () =>
    setCurrent((c) => (c === 0 ? data.reviews.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === data.reviews.length - 1 ? 0 : c + 1));

  const review = data.reviews[current];

  return (
    <section className={styles.avaliationsWrapper}>
      <div className={styles.contentAvaliations}>
        <div className={styles.headerAvaliations}>
          <h2>O que nossos clientes dizem</h2>
          <div className={styles.summary}>
            <span className={styles.ratingNumber}>
              {data.rating.toFixed(1)}
            </span>
            <Stars rating={Math.round(data.rating)} />
            <span className={styles.totalRatings}>
              {data.user_ratings_total.toLocaleString("pt-BR")} avaliações no
              Google
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          <FiChevronLeft
            size={44}
            onClick={prev}
            className={styles.ArrowsDisplay}
          />

          <div
            className={styles.card}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
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
            </div>
            <div className={styles.cardDescription}>
              <Stars rating={review.rating} size="small" />
              {review.text && (
                <p className={styles.reviewText}>{review.text}</p>
              )}
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
            onClick={next}
            className={styles.ArrowsDisplay}
          />
        </div>
      </div>
    </section>
  );
};

export default AvaliationsComponent;
