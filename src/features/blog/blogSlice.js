import { createSlice } from "@reduxjs/toolkit";





export const blogSlice = createSlice({
  name: 'blogSlice',
  initialState: {
    blogs: []
  },
  reducers: {

    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },

    removeBlog: (state, action) => {
      state.blogs.splice(action.payload, 1);
    },

    updateBlog: (state, action) => {
      state.blogs = state.blogs.map((blog) => {
        return blog.id === action.payload.id ? action.payload : blog
      });
    },





  }
});


export const { addBlog, removeBlog, updateBlog } = blogSlice.actions;