import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
// import store from "../store";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const userActions = userSlice.actions;

const loginUser = (payload) => async (dispatch) => {
  // const {
  //   user: { token },
  // } = store.getState().user;
  dispatch(userActions.setLoading(true));
  try {
    const {
      data: { data },
    } = await axiosInstance.post(
      `/users/login`,
      { ...payload }
      // { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(data);
    dispatch(userActions.setUser(data));
  } catch (err) {
    dispatch(userActions.setUser(null));
  } finally {
    dispatch(userActions.setLoading(false));
  }
};

const registerUser = (payload) => async (dispatch) => {
  dispatch(userActions.setLoading(true));
  try {
    const { name, password, email } = payload;
    const {
      data: { data },
    } = await axiosInstance.post(`/users`, { name, password, email });
    console.log(data);
    dispatch(userActions.setUser(data));
  } catch (err) {
    dispatch(userActions.setUser(null));
  } finally {
    dispatch(userActions.setLoading(false));
  }
};

export { userSlice, loginUser, registerUser };
