import React, { useState, useContext } from "react";
import { LaneContext } from "../../Context/LaneContext";

function NewLaneWrapper() {
  const { addNewLane } = useContext(LaneContext);
  const [laneName, setLaneName] = useState("");

  const createNewLane = (name) => {
    return {
      laneName: name,
      cards: [],
    };
  };

  const handleClick = () => {
    const newLane = createNewLane(laneName);
    addNewLane(newLane);
    setLaneName("");
  };

  return (
    <>
      <label htmlFor="laneName">
        Nome da lane
        <input
          type="text"
          id="laneName"
          value={laneName}
          onChange={(e) => setLaneName(e.target.value)}
        />
        <button onClick={() => handleClick()}>Criar nova lane!</button>
      </label>
    </>
  );
}

export default NewLaneWrapper;
