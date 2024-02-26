import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            // state.cartItems = [];
            return { cartItems: [], amount:0, total:0 }
        },
        removeItem: (state, action) => {
            const id= action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== id);
        },
        increaseAmount: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.amount++;
        },
        decreaseAmount: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.amount--;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;                
            })
            state.amount = amount;
            state.total = total;
        }

    },
});

export const { clearCart , removeItem, increaseAmount, decreaseAmount, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;