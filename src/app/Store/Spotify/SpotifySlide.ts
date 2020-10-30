import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchPlaylists, getFeaturesPlaylist, getUser } from './spotifyActions';

type SpotifyState = {
  user: any;
  playlists: any;
  spotify: null;
  discover_weekly: any;
  top_artists: null;
  playing: boolean;
  item: null;
  token: string | undefined;
};

const initialState: SpotifyState = {
  user: null,
  playlists: null,
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  token: '',
};

export const spotifySlide = createSlice({
  name: 'spotify',
  initialState: initialState as SpotifyState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(fetchPlaylists.fulfilled, (state, action) => {
      state.playlists = action.payload;
    });

    builder.addCase(getFeaturesPlaylist.fulfilled, (state, action) => {
      state.discover_weekly = action.payload;
    });
  },
});

export const { setToken } = spotifySlide.actions;
export default spotifySlide.reducer;
