import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, removeUserFromLocal, setUser } from "../shared/localStorage";



export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: getUserFromLocal()
  },
  reducers: {

    setUserToLocal: (state, action) => {
      state.user = action.payload;
      setUser(state.user);
    },

    removeUser: (state, action) => {
      state.user = null;
      removeUserFromLocal();

    },


  }
});

export const { setUserToLocal, removeUser } = userSlice.actions;