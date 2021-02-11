import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import inputStyles from "./searchStyles";

export default function SearchInput({
  city,
  setCity,
  handleInputChange,
  weatherClickHandler,
  value,
}) {
  return (
    <div>
      <input
        value={value}
        onChange={handleInputChange}
        placeholder="Enter City..."
        style={inputStyles}
        type="text"
      ></input>
      <div>
        <FontAwesomeIcon
          onClick={weatherClickHandler}
          className="searchIcon"
          icon={faSearch}
        />
      </div>
    </div>
  );
}
