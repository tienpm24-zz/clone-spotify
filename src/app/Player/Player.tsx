import styled from 'styled-components';

import React from 'react';

import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Footer from './components/Footer';

const PlayerRoot = styled.div``;

const PlayerBody = styled.div`
  display: flex;
`;

const Player: React.FC = () => {
  return (
    <PlayerRoot>
      <PlayerBody>
        <Sidebar />
        <Body />
      </PlayerBody>

      <Footer />
    </PlayerRoot>
  );
};

export default Player;
