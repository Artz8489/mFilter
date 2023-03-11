import configureStore from './configStore'
// import { postsInitialState, postsStoreKey } from './reducers/posts'

const initialState = {
//   [postsStoreKey]: { ...postsInitialState }
}

const store = configureStore(initialState)

export default store
