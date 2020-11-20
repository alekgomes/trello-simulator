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

  return {
    removeCard,
    addCard,
    moveCard,
  };
};

export const initialLanesState = [
  {
    laneId: "ijrf",
    laneName: "Introdução",
    cards: [
      {
        cardId: "123",
        title: "Você pode criar um card!",
        body: "Clique em um card para melhor visualizar suas informações",
      },
    ],
  },
  {
    laneId: "sookf",
    laneName: "Armazenamos seu progresso",
    cards: [
      {
        cardId: "124",
        title: "Crie um novo card e aperte f5!",
        body: "O estado da aplicação é armazenado no localStorage!",
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

  return (
    <LaneContext.Provider
      value={{ lanesState, addCard, removeInfos, addNewLane, moveCard }}
    >
      {children}
    </LaneContext.Provider>
  );
};

export default LaneProvider;
