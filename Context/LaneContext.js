import React, { useState, createContext, useEffect } from "react";
import { getLanes, updateLocalStorage } from "./LocalStorage";
import { v4 as uuidv4 } from "uuid";
export const LaneContext = createContext();

export const createNewLane = (name) => {
  return {
    infos: {
      laneName: name,
      cards: [],
    },
  };
};

export const LaneProvider = ({ children }) => {
  const initialLanesState = [
    {
      infos: {
        laneName: "Introdução",
        cards: [
          {
            cardId: "01",
            title: "Você pode criar um card!",
            body: "Clique em um card para melhor visualizar suas informações",
          },
          {
            cardId: "02",
            title: "Os card são salvos no localStorage!!",
            body: "Pode conferir",
          },
        ],
      },
    },
  ];

  const [state, setState] = useState(initialLanesState);

  // useEffect(() => {
  //   console.log("useEffect[] | setState(getLanes() || initialState)");
  //   setState(getLanes() || initialState);
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect[state]| updateLocalStorage(state)");
  //   updateLocalStorage(state);
  // }, [state]);

  const addInfos = (laneId, information) => {
    const currState = { ...state };
    currState[laneId].infos = [...currState[laneId].infos, information];
    setState(currState);
  };

  const removeInfos = (laneId, infoTitle) => {
    const currState = { ...state };
    const itemIdex = currState[laneId].infos.findIndex(
      (title) => title === infoTitle
    );
    currState[laneId].infos.splice(itemIdex, 1);
    setState(currState);
  };

  const moveCard = (souceLane, cardTitle, destinationLane) => {
    const currState = { ...state };
    const sourceArray = currState[souceLane].infos;
    const information = sourceArray.filter(
      (info) => info.title === cardTitle
    )[0];
    currState[destinationLane].infos = [
      ...currState[destinationLane].infos,
      information,
    ];

    const sourceCardIndex = sourceArray.findIndex(
      (info) => info.title === information.title
    );
    sourceArray.splice(sourceCardIndex, 1);

    setState(currState);
  };

  return (
    <LaneContext.Provider value={{ state, addInfos, removeInfos, moveCard }}>
      {children}
    </LaneContext.Provider>
  );
};

export default LaneProvider;
