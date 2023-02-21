import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  access_token: null,
  refresh: null,
}
export const authSlice = createSlice({
  name: 'auth_access_token',
  initialState,
  reducers: {
    setUserAccessToken: (state, action) => {
      console.log("action.payload", action.payload)
      state.access_token = action.payload.access_token
      state.refresh = action.payload.refresh
      state.isLoggedIn =true;
    },
    unSetUserAccessToken: (state, action) => {
      console.log("action.payload", action.payload)
      state.access_token = null;
      state.refresh = null;
      state.isLoggedIn = false;
    },
  }
})

export const { setUserAccessToken, unSetUserAccessToken } = authSlice.actions
export default authSlice.reducer