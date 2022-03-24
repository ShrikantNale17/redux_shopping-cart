import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart: (state, { payload }) => {
            state.cartItems.filter(item => item.id === payload.id).length === 0
                ? state.cartItems.push({ ...payload, quantity: 1 })
                : state.cartItems = state.cartItems.map(item => item.id === payload.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                )
        },
        checkoutCart: (state) => {
            state.cartItems = []
        }
    }
})

export const { addToCart, checkoutCart } = cartSlice.actions

export default cartSlice.reducer