import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    notification: null,
    orderModalShow: false,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.title,
      };
    },

    setOrderModalShow(state, action) {
      state.orderModalShow = action.payload.show;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
