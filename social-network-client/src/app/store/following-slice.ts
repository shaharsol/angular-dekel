import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../models/users/user.model'

export interface FollowingState {
  following: User[],
}

const initialState: FollowingState = {
  following: [],
}

export const followingSlice = createSlice({
  name: 'following',
  initialState,
  reducers: {
    init: (state, action: PayloadAction<User[]>) => {
      state.following = action.payload
    },
    follow: (state, action: PayloadAction<User>) => {
      state.following.push(action.payload)
    },
    unfollow:(state, action: PayloadAction<{id: string}>) => {
      state.following = state.following.filter(follow => follow.id != action.payload.id)
    },
  },
})

export const { init, follow, unfollow } = followingSlice.actions

export default followingSlice.reducer
