import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("leavesState")
  ? JSON.parse(localStorage.getItem("leavesState"))
  : {
      addToLeaves: null,
    };

const allLeavesSlice = createSlice({
  name: "allLeaves",
  initialState,
  reducers: {
    addLeaves: (state, action) => {
      state.addToLeaves = action.payload;
      localStorage.setItem("leavesState", JSON.stringify(state));
    },
  },
});

export const { addToLeaves } = allLeavesSlice.actions;
export default allLeavesSlice.reducer;
