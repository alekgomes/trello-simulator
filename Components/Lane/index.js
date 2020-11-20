import React from "react";
import FormNewCard from "../FormNewCard";
import Card from "../Card";
import ItemTypes from "../../Constants";
import { useDrop } from "react-dnd";
import styles from "./style.module.scss";

const Lane = ({ laneName, cards, laneId }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    // drop: ({ laneName, information }) => moveCard(laneName, information),
  });
  return (
    <section
      className={styles.lane}
      // ref={drop}
    >
      <h1 className={styles.title}>{laneName}</h1>
      <FormNewCard laneName={laneName} laneId={laneId} />
      {cards.map((info) => {
        const { cardId, title, body } = info;
        return (
          <Card
            cardId={cardId}
            title={title}
            body={body}
            laneName={laneName}
            laneId={laneId}
          />
        );
      })}
    </section>
  );
};

export default Lane;
