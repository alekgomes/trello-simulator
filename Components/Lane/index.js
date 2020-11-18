import React from "react";
import FormNewCard from "../FormNewCard";
import Card from "../Card";
import ItemTypes from "../../Constants";
import { useDrop } from "react-dnd";
import styles from "./style.module.scss";

const Lane = ({ laneName, cards, id }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: ({ title, laneId }) => moveCard(laneId, title, id),
  });
  return (
    <section className={styles.lane} ref={drop}>
      <h1 className={styles.title}>{laneName}</h1>
      <FormNewCard />
      {cards.map((info) => {
        const { id, title, body } = info;
        return <Card id={id} key={id} title={title} body={body} />;
      })}
    </section>
  );
};

export default Lane;
