import { postSlice } from "./slices/postSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({ reducer: { posts: postSlice.reducer } });

export default store;
