import React from "react";
import Aside from "./Layout/Aside";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Lanes from "./Components/Lanes";

import { LaneProvider } from "./Context/LaneContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import styles from "./style.module.scss";

const App = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Aside />
      <LaneProvider>
        <Main>
          <DndProvider backend={HTML5Backend}>
            <Lanes />
          </DndProvider>
        </Main>
      </LaneProvider>
    </div>
  );
};

export default App;
