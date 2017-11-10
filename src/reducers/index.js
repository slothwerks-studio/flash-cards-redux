// Import the flipCard functionality from flipCard.js.

import flipCard from './flipCard';

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