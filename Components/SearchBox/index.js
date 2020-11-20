import React from "react";
import styles from "./style.module.scss";

const SearchBox = () => {
  return (
    <div className={styles.searchBox}>
      <input
        className={styles.searchBox__input}
        type="text"
        placeholder="Pesquisar"
      />
    </div>
  );
};

export default SearchBox;
