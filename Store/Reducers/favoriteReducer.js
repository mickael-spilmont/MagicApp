const initialState = { favoritesCards: [] };

export default function toggleFavorite(state = initialState, action) {
    let nextState;

    switch(action.type) {

        case 'TOGGLE_FAVORITE':

            const cardIndex = state.favoritesCards.findIndex((item) => {
                return item.id === action.value.id;
            });

            console.log(cardIndex);

            if(cardIndex !== -1) {
                nextState = {
                    ...state,
                    favoritesCards: state.favoritesCards.filter( (item, index) => index !== cardIndex)
                };
            }
            else {
                nextState = {
                    ...state,
                    favoritesCards: [...state.favoritesCards, action.value]
                };
            }

            return nextState || state;

        default:
            return state;
    }
}