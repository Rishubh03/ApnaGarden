import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notification_count: 0,
  notification_list: [],
}
export const notificationSlice = createSlice({
  name: 'auth_access_token',
  initialState,
  reducers: {
    addNotification: (state, action) => {
    state.notification_count = state.notification_count + 1
	  state.notification_list.unshift(action.payload.message)		
    },
  }
})

export const { addNotification } = notificationSlice.actions
export default notificationSlice.reducer