import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToken(state, { payload: { token } }) {
      state.token = token;
    },
  },
});
