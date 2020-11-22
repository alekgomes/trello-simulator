import React from "react";
import Aside from "./Layout/Aside";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Lanes from "./Components/Lanes";
import NewLaneWrapper from "./Components/NewLaneWrapper";

import { LaneProvider } from "./Context/LaneContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import styles from "./style.module.scss";

const App = () => {
  return (
    <div className={styles.root}>
      <LaneProvider>
        <Header />
        <Aside />
        <Main>
          <DndProvider backend={HTML5Backend}>
            <Lanes />
            <NewLaneWrapper />
          </DndProvider>
        </Main>
      </LaneProvider>
    </div>
  );
};

export default App;
