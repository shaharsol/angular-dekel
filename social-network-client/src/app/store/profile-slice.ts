import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../models/users/user.model'
import { Post } from '../models/posts/post.model'
import { Comment } from '../models/comments/comment.model'

export interface ProfileState {
  posts: Post[],
}

const initialState: ProfileState = {
  posts: [],
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    init: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload
    },
    add: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload)
    },
    remove: (state, action: PayloadAction<{id: string}>) => {
      state.posts = state.posts.filter(post => post.id != action.payload.id)
    },
    update: (state, action: PayloadAction<Post>) => {
      const index = state.posts.findIndex(post => post.id === action.payload.id)
      if(index > -1) state.posts[index] = action.payload
    }, 
    addComment: (state, action: PayloadAction<Comment>) => {
      const index = state.posts.findIndex(post => post.id === action.payload.postId)
      if(index > -1) state.posts[index].comments.push(action.payload)
    }
  },
})

export const { init, add, remove, update, addComment } = profileSlice.actions

export default profileSlice.reducer
