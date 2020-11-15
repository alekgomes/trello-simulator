import React, { useState, createContext } from "react";

export const LaneContext = createContext();

export const LaneProvider = ({ children }) => {
  const [state, setSate] = useState({
    lane01: {
      id: "lane01",
      infos: [
        {
          title: "Você pode cliar em um card!",
          body: "Clique em um card para melhor visualizar suas informações",
        },
      ],
    },
    lane02: {
      id: "lane02",
      infos: [
        {
          title: "Arraste esse card",
          body: "Clique e arraste esse card para qualquer lane",
        },
      ],
    },
    lane03: {
      id: "lane03",
      infos: [
        {
          title: "É possível adicionar cards!",
          body: "Clique no botão + para criar um novo card ",
        },
      ],
    },
    lane04: {
      id: "lane04",
      infos: [
        {
          title: "É possível remover um card!",
          body: "Clique no X ao lado do card para excluí-lo ",
        },
      ],
    },
  });

  const addInfos = (laneId, information) => {
    const currState = { ...state };
    currState[laneId].infos = [...currState[laneId].infos, information];
    setSate(currState);
  };

  const removeInfos = (laneId, infoTitle) => {
    const currState = { ...state };
    const itemIdex = currState[laneId].infos.findIndex(
      (title) => title === infoTitle
    );
    currState[laneId].infos.splice(itemIdex, 1);
    setSate(currState);
  };

  const moveCard = (souceLane, cardTitle, destinationLane) => {
    // // copy infos
    const currState = { ...state };
    const sourceArray = currState[souceLane].infos;
    const information = sourceArray.filter(
      (info) => info.title === cardTitle
    )[0];
    currState[destinationLane].infos = [
      ...currState[destinationLane].infos,
      information,
    ];

    // // remove infos
    const sourceCardIndex = sourceArray.findIndex(
      (info) => info.title === information.title
    );
    sourceArray.splice(sourceCardIndex, 1);

    setSate(currState);
  };

  return (
    <LaneContext.Provider value={{ state, addInfos, removeInfos, moveCard }}>
      {children}
    </LaneContext.Provider>
  );
};

export default LaneProvider
