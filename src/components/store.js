import { configureStore } from '@reduxjs/toolkit'
import postSlice from "./rtk/reducers/watchSlice"
import Watchedslice from "./rtk/reducers/Watchedslice"

export const store = configureStore({
  reducer: {
     postSlice,
     Watchedslice,
  },
})