import styled from 'styled-components';
import React from 'react';

import Header from './Header';
import { useSelector } from 'react-redux';
import { getSpotify } from '../../Store/Spotify';
import Icon from '@material-ui/core/Icon';
import { Menu, MenuItem } from '@material-ui/core';

const BodyRoot = styled.div`
  padding: 30px;
  flex: 2;
  color: white;
  background: linear-gradient(transparent, rgba(0, 0, 0, 1));
  background-color: rgb(90, 128, 163);
`;

const Info = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;

  & img {
    width: 232px;
    min-width: 232px;
    height: 232px;
    margin: 0 20px;
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  }
`;

const InfoText = styled.div`
  flex: 1;

  & h1 {
    font-size: 96px;
    margin-bottom: 10px;
  }
  & p {
    font-size: 14px;
  }
  & a {
    text-decoration: none;
  }
`;

const ExternalUrls = styled.div`
  display: flex;
  margin-top: 8px;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  & a {
    margin-right: 10px;
    color: #fff;
    :hover {
      text-decoration: underline;
    }
  }
`;

const Songs = styled.div`
  z-index: 1;
  margin: 20px -30px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  & .MuiIcon-root {
    margin-right: 20px;
  }
`;

const PlayAllSongs = styled(Icon)`
  font-size: 70px !important;
  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #1db954;
  :hover {
    transition: 100ms transform ease-in;
    transform: scale(1.08);
  }
`;

const Favorite = styled(Icon)``;
const MoreHoriz = styled(Icon)``;

const Body: React.FC = () => {
  const { discover_weekly } = useSelector(getSpotify);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <BodyRoot>
      <Header />
      <Info>
        <img src={discover_weekly?.images[0].url} alt='' />
        <InfoText>
          <strong>PLAYLIST</strong>
          <h1>Discover Weekly</h1>
          <p>{discover_weekly?.description}</p>
          <ExternalUrls>
            <a href={discover_weekly?.external_urls.spotify}>Spotify</a>
            <p>{discover_weekly?.tracks.total} bài hát</p>
          </ExternalUrls>
        </InfoText>
      </Info>

      <Songs>
        <Icons>
          <PlayAllSongs>play_circle_filled</PlayAllSongs>
          <Favorite fontSize='large'>favorite_outline</Favorite>
          <MoreHoriz
            aria-controls='options'
            fontSize='large'
            onClick={handleClick}
          >
            more_horiz
          </MoreHoriz>
          <Menu
            id='options'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Bắt đầu Radio</MenuItem>
            <MenuItem onClick={handleClose}>Lưu vào thư viện</MenuItem>
            <MenuItem onClick={handleClose}>
              Sao chép liên kết Playlist
            </MenuItem>
            <MenuItem onClick={handleClose}>
              Mở trong Ứng dụng máy tính để bàn
            </MenuItem>
          </Menu>
        </Icons>
      </Songs>
    </BodyRoot>
  );
};
export default Body;
