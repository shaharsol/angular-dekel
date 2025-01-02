import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../models/users/user.model'
import { Post } from '../models/posts/post.model'
import { Comment } from '../models/comments/comment.model'


// interface PostMeta {
//   post: Post,
//   isNew: boolean
// }

// interface PostMeta {
//   post: Post,
//   isFiltered: boolean
// }


export interface ProfileState {
  posts: Post[],
  newPosts: Post[]
}

// export interface ProfileState {
//   visualPosts: Post[],
//   filteredPosts: Post[]
// }

// export interface ProfileState {
//   posts: Post[]
//   visiblePosts: Post[],
//   // filteredPosts: Post[]
// }

const initialState: ProfileState = {
  posts: [],
  newPosts: []
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    init: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload
    },
    add: (state, action: PayloadAction<Post>) => {
      state.newPosts.push(action.payload)
    },
    mergeNew: (state) => {
      state.posts = [...state.newPosts, ...state.posts]
      state.newPosts = []
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

export const { init, add, remove, update, addComment, mergeNew } = profileSlice.actions

export default profileSlice.reducer
