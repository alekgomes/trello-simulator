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

  const addCard = (laneName, information) => {};

  return {
    removeCard,
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
    laneName: "Teste",
    cards: [
      {
        cardId: "124",
        title: "Você pode criar um card!",
        body: "Clique em um card para melhor visualizar suas informações",
      },
    ],
  },
];

export const LaneProvider = ({ children }) => {
  const [lanesState, setLanesState] = useState(initialLanesState);

  // useEffect(() => {
  //   console.log("useEffect[] | setState(getLanes() || initialState)");
  //   setState(getLanes() || initialState);
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect[state]| updateLocalStorage(state)");
  //   updateLocalStorage(state);
  // }, [state]);

  const addNewLane = (lane) => {
    console.log("addNewLane chamada");
    setLanesState([...lanesState, lane]);
  };

  const addCard = (laneId, information) => {
    const { title, body } = information;
    const currState = [...lanesState];
    const currLane = currState
      .filter((lane) => laneId === lane.laneId) // return array with single object
      .reduce((_, curr) => {
        return curr; // return object
      });

    currLane.cards.push({
      cardId: uuidv4(),
      title: title,
      body: body,
    });

    setLanesState(currState);
  };

  const removeInfos = (laneName, cardId) => {
    const newState = laneController().removeCard(laneName, cardId, [
      ...lanesState,
    ]);
    setLanesState(newState);
  };

  // const moveCard = (souceLane, cardTitle, destinationLane) => {
  //   const currState = { ...state };
  //   const sourceArray = currState[souceLane].infos;
  //   const information = sourceArray.filter(
  //     (info) => info.title === cardTitle
  //   )[0];
  //   currState[destinationLane].infos = [
  //     ...currState[destinationLane].infos,
  //     information,
  //   ];

  //   const sourceCardIndex = sourceArray.findIndex(
  //     (info) => info.title === information.title
  //   );
  //   sourceArray.splice(sourceCardIndex, 1);

  //   setState(currState);
  // };

  return (
    <LaneContext.Provider
      value={{ lanesState, addCard, removeInfos, addNewLane }}
    >
      {children}
    </LaneContext.Provider>
  );
};

export default LaneProvider;

const laneState = {
  intro: {
    cards: ["asd", 123],
  },
};
