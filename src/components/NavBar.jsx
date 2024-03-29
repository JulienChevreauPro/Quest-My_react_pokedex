
function NavBar ({pokemonIndex, pokemonList, setPokemonIndex}) {

    function handleClickForward () {
      setPokemonIndex (pokemonIndex +1);
    }
    function handleClickBackward () {
      setPokemonIndex (pokemonIndex -1);
    }

    return (
    <>
    {pokemonIndex>0?<button type="button" onClick={handleClickBackward}>Précédent</button> : <></>}
    {pokemonIndex<pokemonList.length-1?<button type="button" onClick={handleClickForward}>Suivant</button> : <></>}
    </>
    );
}

export default NavBar