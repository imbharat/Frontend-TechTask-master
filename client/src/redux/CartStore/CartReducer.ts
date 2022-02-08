import { REMOVE_PRODUCT, UPDATE_CART } from "./CartActions";
import { Cart, Action } from "./Types";

const initialState: Cart = {
    products: []
}

export const reducer = (state = initialState, action: Action) => {
    switch(action.type){
        case UPDATE_CART:
            let productToUpdate = state.products.find((product) => product.id === action.payload.id);
            if(productToUpdate){
                const index = state.products.findIndex((product) => product.id === action.payload.id);
                const currentQuantity = productToUpdate.quantity;
                productToUpdate = {
                    ...productToUpdate,
                    quantity: currentQuantity + action.payload.quantity
                }
                const allProducts = [...state.products]
                allProducts[index] = productToUpdate;
                return {
                    ...state,
                    products: allProducts
                }
            }
            else {
                return {
                    ...state,
                    products: [...state.products, action.payload]
                }
            }
        case REMOVE_PRODUCT:
            const filteredProducts = state.products.filter((product) => product.id !== action.payload.id);
            return {
                ...state,
                products: filteredProducts
            }
        default:
            return {
                ...state
            }
    }
}