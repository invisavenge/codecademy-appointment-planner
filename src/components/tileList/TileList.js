import React from "react";

import { Tile } from '../tile/Tile';

export const TileList = ({tiles}) => {
  return (
    <div>
      {/* Only if tiles exists */}
      {tiles && tiles.map((tile, index) => {
        // Use object restructuring to extract the name property
        // from each object and use ...rest syntax to get
        // the description.
        const { name, ...remainingTileProperties } = tile;

        return (
          <Tile
            key={index}
            name={name}
            description={remainingTileProperties}
          />
        );
      })}
    </div>
  );
};
