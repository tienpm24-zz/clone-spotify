import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromResponse } from '../SpotifyAuth/spotifyAuth';
import {
  fetchPlaylists,
  getFeaturesPlaylist,
  getSpotify,
  getUser,
  setToken,
} from '../Store/Spotify';

import Login from '../Login/Login';
import Player from '../Player/Player';

const spotifyApi = new SpotifyWebApi();

const AppWrapper: React.FC = () => {
  const { token } = useSelector(getSpotify);
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {
      dispatch(setToken(_token));
      spotifyApi.setAccessToken(_token);
      dispatch(getUser());
      dispatch(fetchPlaylists());
      dispatch(getFeaturesPlaylist());
    }
  }, [dispatch]);

  return <Fragment>{token ? <Player /> : <Login />}</Fragment>;
};
export default AppWrapper;
