import React from 'react';
import styled from 'styled-components';
import { accessUrl, getTokenFromResponse } from '../SpotifyAuth/spotifyAuth';

const Wrapper = styled.div`
  display: grid;
  position: relative;
  place-items: center;
  height: 100vh;
  background-image: url('https://w.wallha.com/ws/12/2p1aUQmx.jpg');
`;

const LoginBtn = styled.a`
  position: absolute;
  padding: 20px;
  border-radius: 99px;
  background-color: #1db954;
  font-weight: 700;
  color: white;
  text-decoration: none;
  bottom: 20px;
  transition: all 0.5s ease;
  &:hover {
    background-color: white;
    color: #1db954;
  }
`;

const Login: React.FC = () => {
  return (
    <Wrapper>
      <LoginBtn href={accessUrl} onClick={getTokenFromResponse}>
        LOGIN TO SPOTIFY
      </LoginBtn>
    </Wrapper>
  );
};

export default Login;
