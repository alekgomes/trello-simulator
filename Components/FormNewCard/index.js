import React, { useState, useContext } from "react";
import { LaneContext } from "../../Context/LaneContext";
import styles from './index.module.scss'

const FormNewCard = ({ id }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [showButton, setShowButton] = useState(true);

  const { addInfos } = useContext(LaneContext);

  const hadleSubmit = (e) => {
    e.preventDefault();
    addInfos(id, { title, body });
    setShowButton(true)
  };

  return (
    <>
      {showButton ? (
        <button onClick={() => setShowButton(false)}>
          <ion-icon name="add-outline"></ion-icon>
        </button>
      ) : (
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
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
