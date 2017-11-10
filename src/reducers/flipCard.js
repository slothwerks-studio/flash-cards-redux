
export default function flipCard(state) {

    if (state.flipped === true) {
        state.flipped === false;
    } else if (state.flipped === false) {
        state.flipped === true;
    }

    return Object.assign({}, state, {
        flipped: state.flipped
    });
}
