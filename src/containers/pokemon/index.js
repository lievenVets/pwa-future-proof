import React from 'react';
import Loader from '../../components/loader';
import Pokemon from '../../components/pokemon';
import Pagination from '../../components/pagination';

import PokeService from '../../services/pokeservice';

import './pokemon-container.css';

const PokemonContainer = () => {
  
  let pokemons = PokeService.getPokemons(0)

  return (
    <div className="pokemon-container">
        <Loader/>
        <Pagination/>
        {
          pokemons.map(val => {
            return <Pokemon pokemon={val}/>
          })
        }
    </div>
  )
};

export default PokemonContainer;