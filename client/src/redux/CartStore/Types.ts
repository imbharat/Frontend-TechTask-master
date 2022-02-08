export type Product = {
    id: string,
    quantity: number,
    details: {
        name: string,
        image: string,
        price: number
    }
}

export type Cart = {
    products: Product[]
}

export type Action = {
    product: Product,
    type: string
    payload: Product
}