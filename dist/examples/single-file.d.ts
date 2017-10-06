export interface RootState {
    basket: BasketState;
}
export interface BasketState {
    items: Item[];
}
export interface Item {
    id: string;
    name: string;
}
declare namespace basket {
    const commitAppendItem: (payload: {
        item: Item;
    }) => void;
    const dispatchDelayedAppend: () => Promise<void>;
}
export default basket;
