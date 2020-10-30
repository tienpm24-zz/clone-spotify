import styled from 'styled-components';
import { Grid, Icon, Slider } from '@material-ui/core';

import React from 'react';

const FooterRoot = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  height: 65px;
  width: 98%;
  background-color: #282828;
  padding: 20px;
`;

const FooterLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  color: white;
  width: 300px;
`;

const FooterCenter = styled.div`
  flex: 0.4;
  padding: 0 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
`;
const FooterRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  flex: 0.3;
`;

const AlbumLogo = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 20px;
  object-fit: contain;
`;

const SongInfo = styled.div``;

const Footer: React.FC = () => {
  return (
    <FooterRoot>
      <FooterLeft>
        <AlbumLogo
          src='https://data.chiasenhac.com/data/cover/128/127491.jpg'
          alt=''
        />
        <SongInfo>
          <h4>Yoo</h4>
          <p>Oups</p>
        </SongInfo>
      </FooterLeft>

      <FooterCenter>
        <Icon fontSize='small'>shuffle</Icon>
        <Icon fontSize='small'>skip_previous</Icon>
        <Icon fontSize='large'>play_circle_outline</Icon>
        <Icon fontSize='small'>skip_next</Icon>
        <Icon fontSize='small'>repeat_icon</Icon>
      </FooterCenter>

      <FooterRight>
        <Grid container spacing={2}>
          <Grid item>
            <Icon>playlist_play</Icon>
          </Grid>
          <Grid item>
            <Icon>volume_down</Icon>
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby='continuous-slider' />
          </Grid>
        </Grid>
      </FooterRight>
    </FooterRoot>
  );
};
export default Footer;
