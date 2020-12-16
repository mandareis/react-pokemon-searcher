import React from "react";
import { Form } from "semantic-ui-react";

class PokemonForm extends React.Component {
  state = {
    name: "",
    hp: "",
    back: "",
    front: "",
  };

  handleSubmitForm = () => {
    this.props.onSubmit({
      name: this.state.name,
      hp: this.state.hp,
      sprites: {
        front: this.state.front,
        back: this.state.back,
      },
    });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmitForm}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <Form.Input
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
              value={this.state.hp}
              onChange={this.handleInputChange}
            />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="front"
              value={this.state.front}
              onChange={this.handleInputChange}
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="back"
              value={this.state.back}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;
