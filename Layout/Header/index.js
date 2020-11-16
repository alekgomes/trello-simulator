import React from "react";
import SearchBox from "../../Components/SearchBox";

import styles from "./style.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <span>Logo da marca</span>
      <SearchBox />
      <div className={styles.header__userIcons}>
        <span className={styles.userIcon}>
          <ion-icon name="apps-outline"></ion-icon>
        </span>
        <span className={styles.userIcon}>
          <ion-icon name="notifications"></ion-icon>
        </span>
        <span className={styles.userIcon}>
          <ion-icon name="person"></ion-icon>
        </span>
      </div>
    </header>
  );
};

export default Header;
