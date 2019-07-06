import React, { ReactEventHandler } from "react";

export interface SearchBarProps {
  onSearch: ReactEventHandler;
  onClick: ReactEventHandler;
  searchValue: string;
  searchCheck: boolean;
}

const SearchBar = (props: SearchBarProps) => (
  <div>
    <input
      value={props.searchValue}
      type="text"
      name="search"
      onChange={props.onSearch}
      autoComplete="off"
    />
    <br />
    <input
      value={props.searchCheck ? "true" : "false"}
      type="checkbox"
      name="check"
      onChange={props.onClick}
    />
  </div>
);

export default SearchBar;
