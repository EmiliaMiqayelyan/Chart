import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'datas',
  initialState: {
    items: [],
  },
  reducers: {
    addData: function (state, action) {
      state.items.push(action.payload);
      console.log(action);
    }
  },

})

export const { addData } = dataSlice.actions

export default dataSlice.reducer