import styled from 'styled-components';

import React from 'react';
import SidebarOption from './SidebarOption';
import { useSelector } from 'react-redux';
import { getSpotify } from '../../Store/Spotify';

const SidebarRoot = styled.div`
  border: 1px solid black;
  height: 97vh;
  max-width: 230px;
  flex: 1;
  padding: 10px;
  color: white;
  background-color: #040404;
  & hr {
    margin: 10px auto;
    background-color: #282828;
    border: none;
    height: 1px;
  }
`;

const SidebarLogo = styled.img`
  margin-right: auto;
  height: 70px;
`;

const SidebarTitle = styled.h1`
  font-size: 12px;
  font-weight: 700;
  color: #b3b3b3;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 10px;
`;

const Sidebar: React.FC = () => {
  const { playlists } = useSelector(getSpotify);

  return (
    <SidebarRoot>
      <SidebarLogo
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt=''
      />
      <SidebarOption title='Trang chủ' icon={'home'} />
      <SidebarOption title='Tìm kiếm' icon={'search'} />
      <SidebarOption title='Thư viện' icon={'library_music'} />
      <br />
      <SidebarTitle>playlists</SidebarTitle>
      <hr />
      {playlists ? (
        playlists.items.map((playlist: any, index: number) => (
          <SidebarOption key={index} title={playlist.name} />
        ))
      ) : (
        <p>loading...</p>
      )}
    </SidebarRoot>
  );
};
export default Sidebar;
