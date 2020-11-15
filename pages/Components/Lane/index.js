import React, { useContext } from "react";
import FormNewCard from "../FormNewCard";
import Card from "../Card";
import { LaneContext } from "../../Context/LaneContext";
import ItemTypes from "../../../Constants";
import { useDrop } from "react-dnd";
import styles from "./style.module.scss";

const Lane = ({ title, id }) => {
  const { state, moveCard } = useContext(LaneContext);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: ({title, laneId}) => moveCard(laneId, title, id),
  });


  const cardInformation = state[id].infos;

  return (
    <section className={styles.lane} ref={drop}>
      <h1 className={styles.title}>{title}</h1>
      <FormNewCard id={id} />
      {cardInformation.map((info) => (
        <Card
          key={info.title}
          laneId={id}
          title={info.title}
          body={info.body}
        />
      ))}
    </section>
  );
};

export default Lane;
