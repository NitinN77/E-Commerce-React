export const initialState = {
    products: [],
    cart: [],
    checkoutToken: null,
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
        case 'SET_TOKEN':
            return {
                ...state,
                checkoutToken: action.data,
            }
    }
};

export default reducer;