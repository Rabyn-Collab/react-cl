import { createSlice } from "@reduxjs/toolkit";
import { getUsersFromLocal, removeUserFromLocal, setUserToLocal } from "../shared/localStorage";



export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: getUsersFromLocal()
  },
  reducers: {

    setUser: (state, action) => {
      state.user = action.payload;
      setUserToLocal(state.user);
    },

    removeUser: (state, action) => {
      state.user = null;
      removeUserFromLocal();

    },


  }
});

export const { setUser, removeUser } = userSlice.actions;