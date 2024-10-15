export const addToCart = (data) => {
    return { 
        type: "ADD_TO_CART",
        payload: data
    }
}

export const removeFromCart = (data) => {
    return { 
        type: "REMOVE_FROM_CART",
        payload: data
    }
}

export const incrementQuantity = (itemId) => {
    return {
        type: 'INCREMENT_QUANTITY',
        payload: itemId
    };
};

export const decrementQuantity = (itemId) => {
    return {
        type: 'DECREMENT_QUANTITY',
        payload: itemId
    };
};

export const checkout = () => {
    return {
        type:"CHECKOUT"
    }
}

//export default {addToCart,removeFromCart} 