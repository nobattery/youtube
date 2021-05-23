import React, { memo, useRef } from "react";
import styles from "./search_header.module.css";

//<img className={styles.image} src="/images/logo.png" alt="logo" />
const SearchHeader = memo(({ onSearch, mostPopular }) => {
  // ! useRef -> <input> ref = {} 꼭 정의해주기 !
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    if (value !== "") {
      onSearch(value);
    } else {
      mostPopular();
    }
  };

  const onHomeClick = () => {
    handleSearch();
  };

  const onClick = () => {
    handleSearch();
  };
  const onKeypress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <button className={styles.icon} onClick={onHomeClick}>
          <i className="fab fa-youtube"></i>
        </button>
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="Search"
        placeholder="Search..."
        onKeyPress={onKeypress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <i className="fas fa-search"></i>
      </button>
    </header>
  );
});

export default SearchHeader;
