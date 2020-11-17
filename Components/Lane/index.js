import React, { useContext } from "react";
import FormNewCard from "../FormNewCard";
import Card from "../Card";
import { LaneContext } from "../../Context/LaneContext";
import ItemTypes from "../../Constants";
import { useDrop } from "react-dnd";
import styles from "./style.module.scss";

const Lane = ({ laneName, cards, id }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: ({ title, laneId }) => moveCard(laneId, title, id),
  });
  console.log("CARDS:", cards);
  return (
    <section className={styles.lane} ref={drop}>
      <h1 className={styles.title}>{laneName}</h1>
      <FormNewCard />
      {console.log("TESTE")}
      {cards.map((info) => {
        const { id, title, body } = info;
        return <Card id={id} key={title} title={title} body={body} />;
      })}
    </section>
  );
};

export default Lane;
