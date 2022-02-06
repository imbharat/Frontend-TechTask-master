import { Dispatch, SetStateAction } from 'react';

const intlNumberFormatValues = ['de-DE', 'currency', 'EUR'];
export const formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
    style: intlNumberFormatValues[1],
    currency: intlNumberFormatValues[2],
});

export const debounceSearch = (func: Dispatch<SetStateAction<string>>, delay: number) => {
    let timer: number;
    return (...args: any) => {
        clearTimeout(timer)
        timer = setTimeout(func, delay, ...args)
    }
}