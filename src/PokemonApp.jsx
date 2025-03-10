import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const {page, pokemons = [], isLoading} = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
        <h1>Pokemon App</h1>
        <hr />
        {isLoading ? <span>Loading...</span> : null}

        <ul>
            {
              pokemons.map(pokemon => (
                  <li key={pokemon.name}>{pokemon.name}</li>
              ))
            }
        </ul>

        <button disabled={ isLoading } onClick={() => dispatch(getPokemons(page))}>Load more Pokemons</button>
    </>
  )
}
