
import React from "react";
import Aside from "./Layout/Aside";
import Header from "./Layout/Header";
import Lane from "./Components/Lane";
import Main from "./Layout/Main";
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
            <Lane title="Planejada" id="lane01" />
            <Lane title="Executando" id="lane02" />
            <Lane title="Impasse" id="lane03" />
            <Lane title="Finalizada" id="lane04" />
          </DndProvider>
        </Main>
      </LaneProvider>
      <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
    </div>
  );
};

export default App
