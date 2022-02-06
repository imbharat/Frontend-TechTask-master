import { Queries } from './graphql';
import { HttpRequest } from './xhr-interceptor';
import { ENDPOINT } from './environment';

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

export const searchProducts = (keywords: string) => {
    return new Promise(resolve => {
        const xhr = HttpRequest('POST', ENDPOINT);
        xhr.send(JSON.stringify({
            query: Queries.searchSuggestions.replace('$prefix', keywords)
        }));
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.response).data.autoSuggestion);
            }
        }
    })
}