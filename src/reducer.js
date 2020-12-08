import { commerce } from "./lib/commerce";

export const initialState = {
    products: [],
    cart: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return { 
                ...state,
                products: action.data,
            };
        case 'SET_CART':
            return {
                ...state,
                cart: action.data,
            }
    }
};

export default reducer;