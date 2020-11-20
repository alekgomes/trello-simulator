import React from "react";
import SearchBox from "../../Components/SearchBox";
import NewLaneWrapper from "../../Components/NewLaneWrapper";

import styles from "./style.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <SearchBox />
      <NewLaneWrapper />
    </header>
  );
};

export default Header;
