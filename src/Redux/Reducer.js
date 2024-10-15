const initialState = {
    cartData: [],
    cartCount:0
}

// function cartItem (state = initialState , action) {
//     switch(action.type) {
//        case "ADD_TO_CART":
//         return {
//             ...state,
//             cartData: [...state.cartData , action.payload],
//             cartCount: state.cartCount + 1
//         }
//         case "REMOVE_FROM_CART":
//             return {
//                 ...state,
//                 cartData: state.cartData.filter((item) => item !== action.payload),
//                 cartCount: state.cartCount - 1
//             }
//         case "CHECKOUT":
//             return initialState;

//         default :
//         return state
//     }
// }

function cartItem(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.cartData.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    cartData: state.cartData.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                    cartCount: state.cartCount + 1
                };
            } else {
                return {
                    ...state,
                    cartData: [...state.cartData, { ...action.payload, quantity: 1 }],
                    cartCount: state.cartCount + 1
                };
            }
        case 'REMOVE_FROM_CART':
            const itemToRemove = state.cartData.find(item => item.id === action.payload.id);
            if (itemToRemove.quantity > 1) {
                return {
                    ...state,
                    cartData: state.cartData.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
                    ),
                    cartCount: state.cartCount - 1
                };
            } else {
                return {
                    ...state,
                    cartData: state.cartData.filter(item => item.id !== action.payload.id),
                    cartCount: state.cartCount - 1
                };
            }
        case 'INCREMENT_QUANTITY':
            return {
                ...state,
                cartData: state.cartData.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                ),
                cartCount: state.cartCount + 1
            };
        case 'DECREMENT_QUANTITY':
            return {
                ...state,
                cartData: state.cartData.map(item =>
                    item.id === action.payload ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
                ),
                cartCount: state.cartCount - 1
            };
        case 'CHECKOUT':
            return initialState;
        default:
            return state;
    }
}

export default cartItem;