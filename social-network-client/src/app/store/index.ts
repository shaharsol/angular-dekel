import { configureStore } from '@reduxjs/toolkit'
import followingReducer from './following-slice'
import followersReducer from './followers-slice'
import profileReducer from './profile-slice'

export const store = configureStore({
  reducer: {
    following: followingReducer,
    followers: followersReducer,
    profile: profileReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
