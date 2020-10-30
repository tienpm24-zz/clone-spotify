import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { spotifyReducer } from './Spotify';
import thunk from 'redux-thunk';

const middleware = [...getDefaultMiddleware(), thunk];
export default configureStore({
  reducer: { spotify: spotifyReducer },
  middleware,
});
