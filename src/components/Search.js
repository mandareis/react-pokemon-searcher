import React from "react";

const Search = (props) => {
  const handleChanges = (e) => {
    props.onChange(e);
  };

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          onChange={handleChanges}
          value={props.value}
        />
        <i className="search icon" />
      </div>
    </div>
  );
};

export default Search;
