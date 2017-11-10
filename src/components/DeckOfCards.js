import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { flipCard } from '../actions';

class DeckOfCards extends Component {

  render() {

    return (
  		<div className="DeckOfCards">
  			<Card flipped={this.props.flipped} />
	        <div className="buttons">
	        	<button>Prev Card</button>
	        	<button>Next Card</button>
	        	<button>Shuffle Deck</button>
	        	<button onClick={this.props.flipCard}>Flip Card</button>
	        </div>
      </div>
    );
  }
}

// We need to bring in a state from Redux which determine whether or not the card is flipped.

function mapStateToProps(state) {
    return {
        flipped: state.flipped
    };
}

// This will add flipCard prop to DeckOfCards. Redux will set it from the action creator.
const mapActionsToProps = { flipCard };

// Connect Redux to this component.
export default connect(mapStateToProps, mapActionsToProps)(DeckOfCards);