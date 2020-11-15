import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { LaneContext } from "../../Context/LaneContext";
import  ItemTypes  from "../../../Constants";
import { useDrag } from "react-dnd";
import styles from './index.module.scss'

// import "./style.scss";

const Card = ({ title, body, laneId }) => {
  // Modal.setAppElement("#root");

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, title, body, laneId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  });

  const { removeInfos } = useContext(LaneContext);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = (e) => {
    e.stopPropagation();
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      width: "50%",
      height: "60%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0, 0.3)",
    },
  };

  return (
    <div
      ref={drag}
      className={styles.card}
      onClick={() => {
        setModalIsOpen(true);
      }}
    >
      <h1>{title}</h1>
      <br />
      <p className={styles.body}>{body}</p>
      <button onClick={() => removeInfos(laneId, title)} className="remove">
        X
      </button>

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={  (e) => {
          closeModal(e);
        }}
      >
        <h1 className={styles.modal__title}>{title}</h1>
        <p className={styles.modal__body}>{body}</p>
        <button className={styles.modal__remove} onClick={(e) => closeModal(e)}>
          X
        </button>
      </Modal>
    </div>
  );
};

export default Card;
