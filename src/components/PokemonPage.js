import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  state = {
    searchText: "",
    pokemon: [], // try II
  };
  handleSearchChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  // new to this page. try II
  async componentDidMount() {
    let response = await fetch("http://localhost:3000/pokemon");
    let data = await response.json();
    this.setState({
      pokemon: data,
    });
  }

  async handleSubmitForm(pokemon) {
    let response = await fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pokemon),
    });
    let data = await response.json();
    this.filterThroughPokemon(data);
  }

  // new to this page. Try II
  filterThroughPokemon = () => {
    return this.state.pokemon.filter((p) => {
      return p.name.includes(this.state.searchText);
    });
  };

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onSubmit={this.handleSubmitForm} />
        <br />
        <Search
          onChange={this.handleSearchChange}
          value={this.state.searchText}
        />
        <br />
        <PokemonCollection pokemon={this.filterThroughPokemon()} />
      </Container>
    );
  }
}

export default PokemonPage;
