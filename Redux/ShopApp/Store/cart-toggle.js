import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  isShowing: false,
  notification: null,
};

const cartShowSlice = createSlice({
  name: "cartShowing",
  initialState: initialCartState,
  reducers: {
    cartBtnToggle(state) {
      state.isShowing = !state.isShowing;
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

export const cartShowActions = cartShowSlice.actions;

export default cartShowSlice;
