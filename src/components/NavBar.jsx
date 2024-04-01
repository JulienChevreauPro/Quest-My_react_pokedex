
export default function NavBar ({pokemonList, setPokemonIndex}) {

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




    // return (
    // <>
    // {pokemonIndex>0?<button type="button" onClick={handleClickBackward}>Précédent</button> : <></>}
    // {pokemonIndex<pokemonList.length-1?<button type="button" onClick={handleClickForward}>Suivant</button> : <></>}
    // </>
    // );
