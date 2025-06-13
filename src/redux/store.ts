import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slices/counterSlice'
import weatherSlice from './sclices/weatherSlice'
import suggestionsSlice from './sclices/suggestionsSlice'
// ...

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    weather: weatherSlice,
    suggestions : suggestionsSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch