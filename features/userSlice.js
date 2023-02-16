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
      state.email = action.payload.email
      state.firstname = action.payload.firstname
      state.lastname = action.payload.lastname
    },
    unSetUserInfo: (state, action) => {
      state.email = null;
      state.firstname = null;
      state.lastname = null;

    },
  }
})

export const { setUserInfo, unSetUserInfo } = userSlice.actions
export default userSlice.reducer