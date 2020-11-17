import React, { useContext } from "react";
import Lane from "../Lane";
import { LaneContext } from "../../Context/LaneContext";

function Lanes() {
  const { state } = useContext(LaneContext);
  console.log("STATE: ", state);
  return state.map((item) => {
    const { id, infos } = item;

    return <Lane id={id} laneName={infos.laneName} cards={infos.cards} />;
  });
}

export default Lanes;
