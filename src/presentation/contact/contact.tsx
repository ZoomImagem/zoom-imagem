"use client";
import styles from "./contact.module.scss";
import { FiArrowDown, FiSend } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";
import { ButtonTag, ContentTag } from "@/components";

const ContactComponent = () => {
  const subjectOptions = [
    "OOH - Out oh home",
    "PDV - Ponto de venda",
    "Projetos especiais",
    "Linha Eco",
    "Parcerias",
    "Suporte",
    "Outros",
  ];

  type DataType = {
    name: string;
    email: string;
    message: string;
  };

  const [data, setData] = useState<DataType>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.error("Erro ao enviar");
      return;
    }
  };

  const handleClear = () => {
    setData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleScroll = () => {
    const next = document.getElementById("role");
    next?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className={styles.wrapper}>
        <section className={styles.hallWrapper}>
          <div className={styles.contentHeader}>
            <h2>
              <strong> Coloque suas ideias em prática: </strong>
              Agende um atendimento
            </h2>
            <div className={styles.contentButtonOvalMobile}>
              <a onClick={() => handleScroll()} className={styles.buttonDown}>
                <FiArrowDown size={36} color="#1E1E1E" />
              </a>
            </div>
          </div>
        </section>

        <ContentTag colorTopPosition="right">
          <form
            onSubmit={handleSubmit}
            className={styles.contentContact}
            id="role"
          >
            <strong> Fale conosco </strong>
            <p>
              Preencha o formulário abaixo ou use os nossos canais de contato
              para falar diretamente com um de nossos especialistas.
            </p>

            <div className={styles.contentCentral}>
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.image}
                  alt="Fale conosco"
                  src="/images/contato.webp"
                  width={1920}
                  height={1080}
                />
              </div>

              <div className={styles.contentForm}>
                <div className={styles.form}>
                  <div className={styles.fieldFull}>
                    <label>Nome completo</label>
                    <input
                      type="text"
                      placeholder="Informe o nome completo"
                      value={data.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                  </div>

                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label>E-mail</label>
                      <input
                        type="text"
                        placeholder="Informe o nome completo"
                        value={data.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>

                    <div className={styles.field}>
                      <label>Celular</label>
                      <input
                        type="tel"
                        name="celular"
                        placeholder="Informe um telefone"
                      />
                    </div>
                  </div>

                  <div className={styles.fieldFull}>
                    <label>Assunto</label>
                    <div className={styles.selectWrapper}>
                      <select name="assunto">
                        <option value="" disabled>
                          Selecione um assunto
                        </option>
                        {subjectOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>

                      <span className={styles.selectArrow}>▾</span>
                    </div>
                  </div>

                  <div className={styles.fieldFull}>
                    <label className={styles.label}>Mensagem</label>
                    <textarea
                      placeholder="Digite sua mensagem"
                      value={data.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                    />
                  </div>

                  <div className={styles.submitRow}>
                    <ButtonTag
                      label="Enviar mensagem "
                      size="lg"
                      variant="primary"
                      icon={<FiSend size={24} color="#191919" />}
                      type="submit"
                      onClick={handleClear}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </ContentTag>
      </section>
    </>
  );
};

export default ContactComponent;
