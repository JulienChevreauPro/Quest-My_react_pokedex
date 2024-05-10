import PropTypes from "prop-types";
import "./PokemonCard.css"

function PokemonCard({ pokemon }) {
  const { imgSrc, name } = pokemon;

  return (
    <figure>
      {imgSrc ? 
        <img src={imgSrc} alt={name} className="pokemon__picture" />
       : 
        <p>???</p>
      }
      <figcaption>{name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
