import { createAsyncThunk } from '@reduxjs/toolkit';

import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const getUser = createAsyncThunk('spotify/getUser', async () => {
  const res = await spotifyApi.getMe();
  console.log('res', res);
  return res;
});

export const fetchPlaylists = createAsyncThunk(
  'spotify/fetchPlaylists',
  async () => {
    const res = await spotifyApi.getUserPlaylists();
    return res;
  }
);

export const getFeaturesPlaylist = createAsyncThunk(
  'spotify/getFeaturesPlaylist',
  async () => {
    const res = await spotifyApi.getPlaylist('37i9dQZEVXcVxtOfSJpFzV');
    return res;
  }
);
