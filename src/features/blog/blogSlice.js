import { createSlice } from "@reduxjs/toolkit";





export const blogSlice = createSlice({
  name: 'blogSlice',
  initialState: {
    blogs: []
  },
  reducers: {

    addBlogs: (state, action) => {
      state.blogs.push(action.payload);
    }

  }
});


export const { addBlogs } = blogSlice.actions;