import React, { useContext } from "react";
import FormNewCard from "../FormNewCard";
import Card from "../Card";
import ItemTypes from "../../Constants";
import { useDrop } from "react-dnd";
import styles from "./style.module.scss";
import { LaneContext } from "../../Context/LaneContext";

const Lane = ({ laneName, cards, laneId }) => {
  const { moveCard, removeLane } = useContext(LaneContext);
  const currLane = laneId;
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: ({ laneId, cardId }) => moveCard(laneId, cardId, currLane),
  });

  const handleRemoveLane = () => {
    removeLane(currLane);
  };

  return (
    <div className={styles.lane} ref={drop}>
      <span onClick={() => handleRemoveLane()} className={styles.removeButton}>
        &times;
      </span>
      <h1 className={styles.title}>{laneName}</h1>
      <hr />
      {cards.map((info) => {
        const { cardId, title, body } = info;
        return (
          <Card
            key={cardId}
            cardId={cardId}
            title={title}
            body={body}
            laneName={laneName}
            laneId={laneId}
          />
        );
      })}
      <br />
      <FormNewCard laneName={laneName} laneId={laneId} />
    </div>
  );
};

export default Lane;
