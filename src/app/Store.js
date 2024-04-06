import { configureStore } from "@reduxjs/toolkit";
import cartred from "../feautres/Slice"
export const Store = configureStore({
  reducer: {
    carts:cartred
  },
});