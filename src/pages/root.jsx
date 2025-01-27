import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemonsIsLoading, getPokemonsList } from '../utils/redux/delivery/seletor';
import { fetchPokemons } from '../utils/redux/delivery/thunks';

export function RootPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getPokemonsIsLoading);
  const list = useSelector(getPokemonsList);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <h1>Pokemons</h1>
      <div className='pokemons_container'>
        {list.map((pokemon, index) => (
          <div key={pokemon.name} className='pokemon'>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              alt={pokemon.name}
            />
            <div>{pokemon.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
