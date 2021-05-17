import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ onSearch }) => {
  // ! useRef -> <input> ref = {} 꼭 정의해주기 !
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeypress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
    console.log("onkeypress");
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.image} src="/images/logo.png" alt="logo" />
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
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default SearchHeader;
