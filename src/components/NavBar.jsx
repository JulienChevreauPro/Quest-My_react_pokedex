
import PropTypes from "prop-types";

function NavBar ({pokemonList, setPokemonIndex}) {

  const handleClick=(pokemon, index)=>{pokemon.name!=="pikachu"?setPokemonIndex(index): alert("pika Pikachu!!") + setPokemonIndex(index)}

  return (
    <> 
     {pokemonList.map((pokemon, index) => 
        <button type="button" 
                key={pokemon.name} 
                onClick={()=>{handleClick(pokemon, index)}}>
            {pokemon.name}
        </button>
      )}
    </>
  ); 
}

NavBar.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
};

export default NavBar;
