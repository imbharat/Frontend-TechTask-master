export const HttpRequest = (type: string, endpoint: string) => {
    let xhr = new XMLHttpRequest();
    xhr.open(type, endpoint);
    xhr.setRequestHeader('Content-Type', 'application/json');
    return xhr;
}