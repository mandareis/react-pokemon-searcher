import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  generatePokemonCards = () => {
    return this.props.pokemon.map((p, i) => {
      return (
        <PokemonCard key={i} name={p.name} hp={p.hp} sprites={p.sprites} />
      );
    });
  };
  render() {
    return (
      <Card.Group itemsPerRow={6}>{this.generatePokemonCards()}</Card.Group>
    );
  }
}

export default PokemonCollection;
