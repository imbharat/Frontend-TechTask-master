import { Dispatch, SetStateAction } from 'react';

const intlNumberFormatValues = ['de-DE', 'currency', 'EUR'];
export const formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
    style: intlNumberFormatValues[1],
    currency: intlNumberFormatValues[2],
});

export const cartDetails = (products: any[]) => {
    const total = products.reduce((total, product) => {
        return {
            price: (product.quantity * product.details.price) + total.price, 
            quantity: product.quantity + total.quantity
        };
    }, {
        price: 0,
        quantity: 0
    });
    return [total.quantity, formatter.format(total.price / 100)];
}

export const debounceSearch = (func: Dispatch<SetStateAction<string>>, delay: number) => {
    let timer: number;
    return (...args: any) => {
        clearTimeout(timer)
        timer = setTimeout(func, delay, ...args)
    }
}