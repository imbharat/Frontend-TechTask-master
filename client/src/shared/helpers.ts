import { Queries } from './graphql';
import { HttpRequest } from './xhr-interceptor';
import { ENDPOINT } from './environment';

const intlNumberFormatValues = ['de-DE', 'currency', 'EUR'];
export const formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
    style: intlNumberFormatValues[1],
    currency: intlNumberFormatValues[2],
});

export const getProducts = (offset: number = 0) => {
    return new Promise(resolve => {
        const xhr = HttpRequest('POST', ENDPOINT);
        xhr.send(JSON.stringify({
            query: Queries.getProducts.replace('$offset', offset.toString()),
        }));
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.response).data.categories);
            }
        }
    })
}