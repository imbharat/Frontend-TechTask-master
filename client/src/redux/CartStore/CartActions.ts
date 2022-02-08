import { Product } from "./Types";

export const UPDATE_CART = 'UPDATE_CART';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const updateCart = (product: Product) => {
    return {
        type: UPDATE_CART,
        message: 'updating cart',
        payload: product
    }
}

export const removeProduct = (product: Product) => {
    return {
        type: REMOVE_PRODUCT,
        message: 'removing product from cart',
        payload: product
    }
}