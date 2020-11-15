import React from "react";
import styles from './style.module.scss'

const SearchBox = () => {
  return (
    <div className={styles.searchBox}>
      <input className={styles.searchBox__input} type="text" placeholder="Pesquisar"/>
      <span className={styles.searchBox__icon}><ion-icon name="search-outline"/></span>
    </div>
  );
};

export default SearchBox;
