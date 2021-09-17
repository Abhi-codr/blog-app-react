import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import showNotification from "../../utils/notification";
import store from "../store";
const initialState = {
  posts: [],
  post: null,
  loading: false,
};

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
      dispatch(postActions.setPost(null));
    } finally {
      dispatch(postActions.setLoading(false));
    }
  };
};

const insertPost = (payload) => {
  return async (dispatch) => {
    const {
      user: { token },
    } = store.getState().user;
    dispatch(postActions.setLoading(true));
    try {
      const {
        data: { data },
      } = await axiosInstance.post(
        `/posts/`,
        { ...payload },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      showNotification("Success", "New post created successfully", "success");
      dispatch(postActions.setPost(data));
    } catch (err) {
      showNotification("Oh No!", "Post was not created", "danger");
      dispatch(postActions.setPost(null));
    } finally {
      dispatch(postActions.setLoading(false));
    }
  };
};

const updatePost = (payload) => {
  return async (dispatch) => {
    const {
      user: { token },
    } = store.getState().user;
    dispatch(postActions.setLoading(true));
    try {
      const {
        data: { data },
      } = await axiosInstance.put(
        `/posts/${payload.id}`,
        { ...payload.data },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      showNotification("Success", "Post updated successfully", "success");
      dispatch(postActions.setPost(data));
      return true;
    } catch (err) {
      showNotification("Oh No!", "Post was not updated", "danger");
      dispatch(postActions.setPost(null));
      return false;
    } finally {
      dispatch(postActions.setLoading(false));
    }
  };
};

const deletePost = (payload) => {
  return async (dispatch) => {
    const {
      user: { token },
    } = store.getState().user;
    dispatch(postActions.setLoading(true));
    try {
      await axiosInstance.delete(`/posts/${payload.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      showNotification("Success", "Post deleted successfully", "success");
      dispatch(postActions.setUpdateSuccess(true));
      return true;
    } catch (err) {
      showNotification("Oh No!", "Post was not deleted", "danger");
      return false;
    } finally {
      dispatch(postActions.setLoading(false));
    }
  };
};

export { postSlice, getPosts, getPost, insertPost, updatePost, deletePost };
