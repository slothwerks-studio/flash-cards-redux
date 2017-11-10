// Import the flipCard functionality from flipCard.js.

import deckCard from '../cardDeck';
import flipCard from './flipCard';

// Ross says that the state should include the cards (an array of objects), the current selected card, and whether or not it is flipped.

const INITIAL_STATE = {
	flipped: false
};
  
export default function (state = INITIAL_STATE, action) { 
    switch (action.type) { 
        case "FLIP_CARD":
            return flipCard(state);
        default: 
            return state; 
    } 
} 