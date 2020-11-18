import React, { useContext } from "react";
import Lane from "../Lane";
import { LaneContext } from "../../Context/LaneContext";

function Lanes() {
  const { state } = useContext(LaneContext);
  return state.map((item) => {
    const { id, infos } = item;
    return (
      <Lane key={id} id={id} laneName={infos.laneName} cards={infos.cards} />
    );
  });
}

export default Lanes;
