import React, { useState, useContext } from "react";
import { LaneContext } from "../../Context/LaneContext";

import styles from "./style.module.scss";

function NewLaneWrapper() {
  const { addNewLane } = useContext(LaneContext);
  const [laneName, setLaneName] = useState("");
  const [showForm, setShowForm] = useState(false);

  const createNewLane = (name) => {
    return {
      laneName: name,
      cards: [],
    };
  };

  const handleClick = () => {
    const newLane = createNewLane(laneName);
    addNewLane(newLane);
    setShowForm(false);
    setLaneName("");
  };

  return (
    <>
      {showForm ? (
        <div className={styles.wrapper}>
          <input
            type="text"
            id="laneName"
            value={laneName}
            placeholder="nome da lista"
            onChange={(e) => setLaneName(e.target.value)}
          />
          <br />
          <button onClick={() => handleClick()}>Criar nova lane!</button>
          <button onClick={() => setShowForm(!showForm)}>Cancelar</button>
        </div>
      ) : (
        <div className={styles.newLane} onClick={() => setShowForm(!showForm)}>
          <span>+ Adicionar nova lista</span>
        </div>
      )}
    </>
  );
}

export default NewLaneWrapper;
