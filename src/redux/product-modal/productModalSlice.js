import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};
export const productModalSlice = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    set: (state, action) => {
      console.log("reducer", { state });
      state.value = action.payload;
    },
    remove: (state, action) => {
      state.value = null;
    },
  },
});
export const { set, remove } = productModalSlice.actions;
export default productModalSlice.reducer;
