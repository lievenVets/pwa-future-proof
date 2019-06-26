import React from 'react';

import './pokemon.css';

const Pokemon = ({ pokemon }) => (
  <div className="pokemon">
    <div> {pokemon.name}</div>
  </div>
);

export default Pokemon;