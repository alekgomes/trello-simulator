import React, { useState, useContext } from "react";
import { LaneContext } from "../../Context/LaneContext";
import styles from "./index.module.scss";

const FormNewCard = ({ laneName, laneId }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [showButton, setShowButton] = useState(true);

  const { addCard } = useContext(LaneContext);

  const hadleSubmit = (e) => {
    e.preventDefault();
    addCard(laneId, { title, body });
    setShowButton(true);
  };

  return (
    <>
      {showButton ? (
        <button
          className={styles.buttonNew}
          onClick={() => setShowButton(false)}
        >
          + Adicionar outro cartão
        </button>
      ) : (
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <textarea
            type="text"
            placeholder="Mensagem"
            onChange={(e) => setBody(e.target.value)}
          />
          <button onClick={(e) => hadleSubmit(e)}>Salvar</button>
          <button onClick={() => setShowButton(true)}>Cancelar</button>
        </form>
      )}
    </>
  );
};

export default FormNewCard;
