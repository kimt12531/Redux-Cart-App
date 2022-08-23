import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    replaceOrder(state, action) {
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice;
