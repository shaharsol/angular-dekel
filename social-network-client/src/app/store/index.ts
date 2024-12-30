import { configureStore } from '@reduxjs/toolkit'
import followingReducer from './following-slice'
import followersReducer from './followers-slice'

export const store = configureStore({
  reducer: {
    following: followingReducer,
    followers: followersReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
