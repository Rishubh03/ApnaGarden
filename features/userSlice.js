import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: "",
  firstname: "",
  lastname: "",
}
export const userSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      console.log("action.payload", action.payload)
      state.email = action.payload.email
      state.firstname = action.payload.firstname
      state.lastname = action.payload.lastname
    },
    unSetUserInfo: (state, action) => {
      console.log("action.payload", action.payload)
      state.email = null;
      state.firstname = null;
      state.lastname = null;

    },
  }
})

export const { setUserInfo, unSetUserInfo } = userSlice.actions
export default userSlice.reducer