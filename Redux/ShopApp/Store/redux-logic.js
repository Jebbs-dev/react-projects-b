import { configureStore, createSlice } from "@reduxjs/toolkit";

import cartShowSlice from "./cart-toggle";
import itemCountSlice from "./item-count";





const store = configureStore({
  reducer: {
    cartShow: cartShowSlice.reducer,
    itemCount: itemCountSlice.reducer,
  },
});

export default store;
