import React from "react";
import SearchBox from "../../Components/SearchBox";

import styles from "./style.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <br/>
      <SearchBox />
    </header>
  );
};

export default Header;
