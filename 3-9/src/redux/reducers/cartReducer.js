import * as actions from "../actions/actionConsts";

const initialState = {
    cart: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_ITEM:
            return { ...state, cart: [...state.cart, action.payload]
            };
        case actions.REMOVE_ITEM:
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload)};
        default:
            return state;
    }
};