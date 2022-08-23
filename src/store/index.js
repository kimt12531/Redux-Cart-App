import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import shopSlice from "./shop-slice";
import orderSlice from "./order-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    shop: shopSlice.reducer,
    order: orderSlice.reducer,
  },
});

export default store;
