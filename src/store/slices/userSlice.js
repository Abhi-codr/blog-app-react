import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import showNotification from "../../utils/notification";
// import store from "../store";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  registerSuccess: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setRegisterSuccess(state, action) {
      state.registerSuccess = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutUser(state) {
      state.user = null;
      showNotification("Success", "Logged you out successfully", "success");
      localStorage.removeItem("user");
    },
  },
});

export const userActions = userSlice.actions;

const loginUser = (payload) => async (dispatch) => {
  dispatch(userActions.setLoading(true));
  try {
    const {
      data: { data },
    } = await axiosInstance.post(`/users/login`, { ...payload });
    showNotification("Success", "Logged you successfully", "success");
    dispatch(userActions.setUser(data));
  } catch (err) {
    dispatch(userActions.setUser(null));
    showNotification("Oh No!", "Email or Password is wrong", "danger");
  } finally {
    dispatch(userActions.setLoading(false));
  }
};

const registerUser = (payload) => async (dispatch) => {
  dispatch(userActions.setLoading(true));
  try {
    const { name, password, email } = payload;
    await axiosInstance.post(`/users`, { name, password, email });
    showNotification("Success", "Registeration successful", "success");
    dispatch(userActions.setRegisterSuccess(true));
  } catch (err) {
    dispatch(userActions.setRegisterSuccess(false));
    showNotification(
      "Oh No!",
      "Cannot Register or email already registered",
      "danger"
    );
  } finally {
    dispatch(userActions.setLoading(false));
  }
};

export { userSlice, loginUser, registerUser };
