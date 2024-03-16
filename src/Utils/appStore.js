import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import allLeavesReducer from "./allLeavesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    leaves: allLeavesReducer,
  },
});

appStore.subscribe(() => {
  const userState = appStore.getState().user;
  localStorage.setItem("userState", JSON.stringify(userState));

  const leavesState = appStore.getState().leaves;
  localStorage.setItem("leavesState", JSON.stringify(leavesState));
});

export default appStore;
