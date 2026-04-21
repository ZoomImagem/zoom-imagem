"use client";

import { solucoes } from "@/lib/solucoes/solucoes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { DropSolutionsMobile } from "./fragments/dropmobile/solutions";
import styles from "./header.module.scss";

export const HeaderTag = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsMenu, setSolutionsMenu] = useState(false);

  const clickMenuMobile = () => {
    setMenuOpen((prev) => !prev);
  };

  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
    setMenuOpen((prev) => !prev);
  }

  return (
    <>
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          <Image
            alt="Zoom"
            src="/images/logo-zoom.svg"
            width={100}
            height={100}
          />

          <ul className={styles.listMenu}>
            <li className={styles.listMenuLi} onClick={() => handleClick("/")}>
              Home
            </li>
            <li
              className={styles.listMenuLi}
              // ref={dropRef}
            >
              <Link href={`/solucoes`}>Soluções</Link>
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
              Fale com a Zoom
            </li>
          </ul>
        </header>

        <div className={styles.headerMobile}>
          <Image
            alt="Zoom"
            src="/images/logo-zoom.svg"
            width={100}
            height={100}
          />

          <FiMenu size={36} color="#C4C4C4" onClick={clickMenuMobile} />
        </div>
      </div>

      {menuOpen && (
        <div className={styles.headerMobileOpen}>
          <div className={styles.headerContent}>
            <Image
              alt="Zoom"
              src="/images/logo-zoom.svg"
              width={100}
              height={100}
            />

            <FiX size={32} color="#C4C4C4" onClick={clickMenuMobile} />
          </div>

          <ul className={styles.listMenuMobile}>
            <li onClick={() => handleClick("/")}>Home</li>
            <li
              onClick={() => {
                setSolutionsMenu(true);
                setMenuOpen(false);
              }}
            >
              Soluções
            </li>
            <li onClick={() => handleClick("/portfolio")}>Projetos</li>
            <li onClick={() => handleClick("/sobre")}>Sobre</li>
            <li onClick={() => handleClick("/contato")}>Fale com a Zoom</li>
          </ul>
        </div>
      )}

      {solutionsMenu && (
        <DropSolutionsMobile onClose={() => setSolutionsMenu(false)} />
      )}
    </>
  );
};

export default HeaderTag;
