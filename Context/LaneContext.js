import React, { useState, createContext, useEffect } from "react";
import { getLanes, updateLocalStorage } from "./LocalStorage";
import { v4 as uuidv4 } from "uuid";
export const LaneContext = createContext();

export const laneController = () => {
  const removeCard = (laneId, cardId, state) => {
    const currLane = state
      .filter((lane) => laneId === lane.laneId) // return array with single object
      .reduce((_, curr) => {
        return curr; // return object
      }, {});
    const cardIndex = currLane.cards.findIndex(
      (item) => item.cardId === cardId
    );
    currLane.cards.splice(cardIndex, 1);

    return state;
  };

  const addCard = (laneId, information, state) => {
    const { title, body } = information;
    const currLane = state
      .filter((lane) => laneId === lane.laneId) // return array with single object
      .reduce((_, curr) => {
        return curr; // return object
      });

    currLane.cards.push({
      cardId: uuidv4(),
      title: title,
      body: body,
    });

    return state;
  };

  const moveCard = (sourceLane, cardId, targetLane, state) => {
    const srcLane = state
      .filter((lane) => sourceLane === lane.laneId) // return array with single object
      .reduce((_, curr) => {
        return curr; // return object
      });

    const trgtLane = state
      .filter((lane) => targetLane === lane.laneId) // return array with single object
      .reduce((_, curr) => {
        return curr; // return object
      });

    const cardIndex = srcLane.cards.findIndex((item) => item.cardId === cardId);
    const cardCopy = { ...srcLane.cards[cardIndex] };
    trgtLane.cards.push(cardCopy);
    srcLane.cards.splice(cardIndex, 1);

    return state;
  };

  const removeLane = (laneId, state) => {
    const laneIndex = state.findIndex((lane) => lane.laneId === laneId);
    state.splice(laneIndex, 1);
    return state;
  };

  return {
    removeCard,
    addCard,
    moveCard,
    removeLane,
  };
};

export const initialLanesState = [
  {
    laneId: uuidv4(),
    laneName: "Introdução",
    cards: [
      {
        cardId: uuidv4(),
        title: "Você pode criar um cartão!",
        body: "Clique em um cartão para melhor visualizar suas informações",
      },
      {
        cardId: uuidv4(),
        title: "Remover card também é facil!",
        body: "O botão abaixo deleta o cartão",
      },
    ],
  },
];

export const LaneProvider = ({ children }) => {
  const [lanesState, setLanesState] = useState(initialLanesState);

  useEffect(() => {
    setLanesState(getLanes() || initialLanesState);
  }, []);

  useEffect(() => {
    updateLocalStorage(lanesState);
  }, [lanesState]);

  const addNewLane = (lane) => {
    lane.laneId = uuidv4();
    setLanesState([...lanesState, lane]);
  };

  const addCard = (laneId, information) => {
    const newState = laneController().addCard(laneId, information, [
      ...lanesState,
    ]);

    setLanesState(newState);
  };

  const removeInfos = (laneId, cardId) => {
    const newState = laneController().removeCard(laneId, cardId, [
      ...lanesState,
    ]);
    setLanesState(newState);
  };

  const moveCard = (sourceLane, cardId, targetLane) => {
    const newState = laneController().moveCard(sourceLane, cardId, targetLane, [
      ...lanesState,
    ]);
    setLanesState(newState);
  };

  const removeLane = (laneId) => {
    const newState = laneController().removeLane(laneId, [...lanesState]);
    setLanesState(newState);
  };

  return (
    <LaneContext.Provider
      value={{
        lanesState,
        addCard,
        removeInfos,
        addNewLane,
        moveCard,
        removeLane,
      }}
    >
      {children}
    </LaneContext.Provider>
  );
};

export default LaneProvider;
