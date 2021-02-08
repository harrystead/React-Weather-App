import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import inputStyles from "./searchStyles";

export default function SearchInput({city, setCity}) {
  let cityInput = React.createRef();
  const submitInput = () => {
    let inputSearch = cityInput.current.value.toLowerCase();
    console.log(inputSearch)
    setCity(inputSearch);
  };
  console.log(city);
  return (
    <div>
      <input ref={cityInput} style={inputStyles} type="text"></input>
      <div>
        <FontAwesomeIcon
          onClick={submitInput}
          className="searchIcon"
          icon={faSearch}
        />
      </div>
    </div>
  );
}
