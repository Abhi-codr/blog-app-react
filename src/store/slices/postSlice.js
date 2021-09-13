import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";

const initialState = { posts: [], post: null, loading: false };

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setPost(state, action) {
      state.post = action.payload;
    },
  },
});

export const postActions = postSlice.actions;

const getPosts = () => {
  return async (dispatch) => {
    dispatch(postActions.setLoading(true));
    try {
      const {
        data: { data },
      } = await axiosInstance.get("/posts");
      dispatch(postActions.setPosts(data));
    } catch (err) {
      dispatch(postActions.setPosts([]));
    } finally {
      dispatch(postActions.setLoading(false));
    }
  };
};

const getPost = (payload) => {
  return async (dispatch) => {
    dispatch(postActions.setLoading(true));
    try {
      const {
        data: { data },
      } = await axiosInstance.get(`/posts/${payload}`);
      dispatch(postActions.setPost(data));
    } catch (err) {
      dispatch(postActions.setPost([]));
    } finally {
      dispatch(postActions.setLoading(false));
    }
  };
};

export { postSlice, getPosts, getPost };
