"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./button.module.scss";
import clsx from "clsx";
import Image from "next/image";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "glass"
    | "ghost"
    | "ecoglass";
  size: "sm" | "md" | "lg";
  icon?: ReactNode;
  onClick?: () => void;
  load?: boolean;
}

const ButtonComponent = ({
  label,
  size,
  variant,
  icon,
  onClick,
  load,
  ...props
}: IButtonProps) => {
  const hasVariant = (() => {
    switch (variant) {
      case "primary":
        return styles.primary;
      case "secondary":
        return styles.secondary;
      case "tertiary":
        return styles.tertiary;
      case "glass":
        return styles.glass;
      case "ghost":
        return styles.ghost;
      case "ecoglass":
        return styles.ecoglass;
      default:
        return styles.default;
    }
  })();

  return (
    <button
      className={clsx(
        styles.button,
        hasVariant,
        size === "sm" && styles.sizeSm,
        size === "md" && styles.sizeMd,
        size === "lg" && styles.sizeLg,
      )}
      onClick={onClick}
      {...props}
    >
      {load ? (
        <Image
          width={100}
          height={100}
          src="/images/loading.svg"
          alt="Carregando"
        />
      ) : (
        <>
          {label}
          {icon}
        </>
      )}
    </button>
  );
};

export default ButtonComponent;
