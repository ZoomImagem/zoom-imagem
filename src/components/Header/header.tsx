"use client";

import { solucoes } from "@/lib/solucoes/solucoes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { DropSolutionsMobile } from "./fragments/dropmobile/solutions";
import styles from "./header.module.scss";

export const HeaderTag = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsMenu, setSolutionsMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const clickMenuMobile = () => setMenuOpen((prev) => !prev);

  function handleClick(link: string) {
    router.push(link);
    setMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`${styles.headerWrapper} ${isScrolled ? styles.isScrolled : ""}`}
      >
        <header className={styles.header}>
          <Image
            alt="Zoom"
            src="/images/logo-zoom.svg"
            width={100}
            height={100}
            onClick={() => handleClick("/")}
          />

          <ul className={styles.listMenu}>
            <li className={styles.listMenuLi} onClick={() => handleClick("/")}>
              Home
            </li>
            <li className={styles.listMenuLi}>
              <Link href="/solucoes">Soluções</Link>
              <ul className={styles.dropMenu}>
                {solucoes.map((s) => (
                  <li onClick={() => setMenuOpen(false)} key={s.slug}>
                    <Link href={`/solucoes/${s.slug}`}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li
              className={styles.listMenuLi}
              onClick={() => handleClick("/portfolio")}
            >
              Projetos
            </li>
            <li
              className={styles.listMenuLi}
              onClick={() => handleClick("/sobre")}
            >
              Sobre
            </li>
            <li
              className={styles.listMenuLi}
              onClick={() => handleClick("/contato")}
            >
              Contato
            </li>
          </ul>
        </header>

        <div className={styles.headerMobile}>
          <Image
            alt="Zoom"
            src="/images/logo-zoom.svg"
            width={100}
            height={100}
            onClick={() => handleClick("/")}
          />
          <FiMenu size={36} color="#C4C4C4" onClick={clickMenuMobile} />
        </div>
      </div>

      {/* sempre no DOM — classe controla visibilidade */}
      <div
        className={`${styles.headerMobileOpen} ${menuOpen ? styles.isVisible : ""}`}
      >
        <div className={styles.headerContent}>
          <Image
            alt="Zoom"
            src="/images/logo-zoom.svg"
            width={100}
            height={100}
            onClick={() => handleClick("/")}
          />
          <FiX size={36} color="#C4C4C4" onClick={clickMenuMobile} />
        </div>

        <ul className={styles.listMenuMobile}>
          <li
            className={menuOpen ? styles.isOpen : ""}
            onClick={() => handleClick("/")}
          >
            Home
          </li>
          <li
            className={menuOpen ? styles.isOpen : ""}
            onClick={() => {
              setMenuOpen(false);
              setSolutionsMenu(true);
            }}
          >
            Soluções
          </li>
          <li
            className={menuOpen ? styles.isOpen : ""}
            onClick={() => handleClick("/portfolio")}
          >
            Projetos
          </li>
          <li
            className={menuOpen ? styles.isOpen : ""}
            onClick={() => handleClick("/sobre")}
          >
            Sobre
          </li>
          <li
            className={menuOpen ? styles.isOpen : ""}
            onClick={() => handleClick("/contato")}
          >
            Fale com a Zoom
          </li>
        </ul>
      </div>

      <div
        className={`${styles.solutionsOpen} ${solutionsMenu ? styles.isVisible : ""}`}
      >
        <DropSolutionsMobile onClose={() => setSolutionsMenu(false)} />
      </div>
    </>
  );
};

export default HeaderTag;
