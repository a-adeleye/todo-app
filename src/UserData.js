import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: ""};

export const userSlice = createSlice({
    name: "user",
    initialState,
  
    reducers: {
      signin: (state, action) => {
        state.value = action.payload;
      },
  
      signout: (state, action) => {
        state.value = action.payload;
      },
    }
});

export const {
    signin,
    signout,
} = userSlice.actions;

export const username = (state) => state.user.value;

export default userSlice.reducer;