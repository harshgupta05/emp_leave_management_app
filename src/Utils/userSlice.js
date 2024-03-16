import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("userState")
  ? JSON.parse(localStorage.getItem("userState"))
  : null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newState = action.payload;
      localStorage.setItem("userState", JSON.stringify(newState));
      return newState;
    },
    removeUser: (state, action) => {
      localStorage.removeItem("userState");
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
