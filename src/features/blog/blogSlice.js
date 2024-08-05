import { createSlice } from "@reduxjs/toolkit";
import { getBlogsFromLocal, setBlogToLocal } from "../shared/localStorage";





export const blogSlice = createSlice({
  name: 'blogSlice',
  initialState: {
    blogs: getBlogsFromLocal()
  },
  reducers: {

    addBlog: (state, action) => {
      state.blogs.push(action.payload);
      setBlogToLocal(state.blogs);
    },

    removeBlog: (state, action) => {
      state.blogs.splice(action.payload, 1);
      setBlogToLocal(state.blogs);
    },

    updateBlog: (state, action) => {
      state.blogs = state.blogs.map((blog) => {
        return blog.id === action.payload.id ? action.payload : blog
      });

      setBlogToLocal(state.blogs);
    },





  }
});


export const { addBlog, removeBlog, updateBlog } = blogSlice.actions;