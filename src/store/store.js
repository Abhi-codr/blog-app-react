import { postSlice } from "./slices/postSlice";
import { userSlice } from "./slices/userSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: { posts: postSlice.reducer, user: userSlice.reducer },
});

export default store;
