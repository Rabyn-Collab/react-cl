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

    removeBlog: () => {

    }

  }
});



export const { addBlog, removeBlog } = blogSlice.actions;