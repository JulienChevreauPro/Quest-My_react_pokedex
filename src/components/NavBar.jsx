export default function NavBar ({pokemonList, handleClick}) {

  return (
    <> 
     {pokemonList.map((pokemon, index) => 
        <button type="button" 
                key={pokemon.name} 
                onClick={()=>{handleClick(index)}}>
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
