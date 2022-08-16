import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    items: [],
  },
  reducers: {
    replaceShop(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const shopActions = shopSlice.actions;

export default shopSlice;
