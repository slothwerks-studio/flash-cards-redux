
export default function flipCard(state) {

    return Object.assign({}, state, {
        flipped: !state.flipped
    });
}
