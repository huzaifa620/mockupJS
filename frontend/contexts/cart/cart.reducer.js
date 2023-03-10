import { addItemToCart, removeItemFromCart } from './cart.utils';

export const initialState = {
    hidden: true,
    cartItems: [],
    address: null,
};

function cartReducer(state, action) {

    switch (action.type) {
        case 'TOGGLE_CART_HIDDEN':
        return {
            ...state,
            hidden: !state.hidden,
        };
    case 'ADD_ITEM':
        return {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload),
        };
    case 'REMOVE_ITEM':
        return {
            ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload),
        };
    case 'CLEAR_ITEM_FROM_CART':
        return {
            ...state,
            cartItems: state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
        ),
    };
    case 'CLEAR_CART':
        return {
            ...state,
            cartItems: [],
        };
    default:
        return state;
    }
}

export default cartReducer;