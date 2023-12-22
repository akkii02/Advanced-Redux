import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  cartIsVisiable: false,
  notification: null,
};

const cartSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.cartIsVisiable = !state.cartIsVisiable;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiAction = cartSlice.actions;
export default cartSlice;
