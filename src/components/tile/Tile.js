import React from "react";

export const Tile = ({name, description}) => {
  // Object.values(description) returns an array containing the VALUES of each of the keys
  // on the description object. I then map over the array to return a paragraph
  // for each of the values.
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {description && Object.values(description).map((value, index) => {
        return <p key={index}>{value}</p>;
      })}
    </div>
  );
};
