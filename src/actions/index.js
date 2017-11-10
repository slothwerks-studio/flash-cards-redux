// There are four actions:  prev. card, next card, shuffle deck, and flip card.

// This function is an 'action creator' it returns the action object.
export function flipCard() {
    // an action object should always have a 'type' property, and it may have
    // other properties as well. When this action is dispatched with Redux
    // it triggers the reducer which will update the state.
    return {
        type: "FLIP_CARD",
    };
}
