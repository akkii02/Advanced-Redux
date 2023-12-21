import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
      cartIsVisiable:false,
}

const cartSlice = createSlice({
      name:"ui",
      initialState:initialUiState,
      reducers:{
            toggle(state){
                  state.cartIsVisiable = !state.cartIsVisiable;
            }
      }
})

export const  uiAction = cartSlice.actions;
export default cartSlice;