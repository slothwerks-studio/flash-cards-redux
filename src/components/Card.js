import React, { Component } from 'react';
import CardFlipped from './CardFlipped';
import CardUnflipped from './CardUnflipped';

class Card extends Component {
  render() {

    if (this.props.flipped === true) {
      return <CardFlipped />;
    } else if (this.props.flipped === false) {
      return <CardUnflipped />;
    } else { 
      return "Check your state, sir!  Nothing matches!"
    }
  }

}

export default Card;