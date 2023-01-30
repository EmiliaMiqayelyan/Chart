import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'datas',
  initialState: {
    datas: [],
  },
  reducers: {
 },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default dataSlice.reducer