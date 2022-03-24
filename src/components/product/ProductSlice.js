import { createSlice } from "@reduxjs/toolkit";
import { addToCart } from "../cart/CartSlice";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: []
    },
    reducers: {
        setProducts: (state, { payload }) => {
            state.products = payload;
        },
        reduceInventory: (state, { payload }) => {
            state.products = state.products.map(product => product.id === payload.id ? { ...product, inventory: product.inventory - 1 } : product)
        }
    }
})

export const addItemToCart = (payload) => (dispatch, getState) => {
    dispatch(addToCart(payload));
    dispatch(reduceInventory(payload));
}

export const { setProducts, reduceInventory } = productSlice.actions

export default productSlice.reducer