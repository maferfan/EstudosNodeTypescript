

type Props = {
    title: string,
    price: number
}

const data: Props[] = [
    {title: 'Produto x', price: 50},
    {title: 'Produto y', price: 40},
    {title: 'Produto z', price: 30}
];

export const Product = {
    getAll: (): Props[] => {
        return data
    },
    getLowerPrices: (price: number): Props[] => {
        return data.filter((item) => item.price > price)
    }
}