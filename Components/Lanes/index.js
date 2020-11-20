import React, { useContext } from "react";
import Lane from "../Lane";
import { LaneContext } from "../../Context/LaneContext";

function Lanes() {
  const { lanesState } = useContext(LaneContext);

  return lanesState.map((lane) => {
    const { laneId, laneName, cards } = lane;
    return <Lane laneId={laneId} laneName={laneName} cards={cards} />;
  });
}

export default Lanes;
