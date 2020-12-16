import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    showBack: false,
  };

  handlesImageFlip = () => {
    this.setState({
      showBack: this.state.showBack ? false : true,
    });
  };

  render() {
    let dynamic = "front";
    if (this.state.showBack) {
      dynamic = "back";
    }
    return (
      <Card>
        <div>
          <div className="image">
            <img
              src={this.props.sprites[dynamic]}
              alt="oh no!"
              onClick={() => this.handlesImageFlip()}
            />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
