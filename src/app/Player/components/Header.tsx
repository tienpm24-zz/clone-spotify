import styled from 'styled-components';
import React from 'react';
import { Avatar, Icon } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getSpotify } from '../../Store/Spotify';

const HeaderRoot = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const HeaderLeft = styled.div`
  flex: 0.5;
  display: flex;
  background-color: white;
  padding: 10px;
  border-radius: 30px;
  color: gray;
  align-items: center;
  & input {
    border: none;
    width: 100%;
    :focus {
      outline: none;
    }
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  & h4 {
    margin-left: 10px;
  }
`;

const Header: React.FC = () => {
  const { user } = useSelector(getSpotify);

  return (
    <HeaderRoot>
      <HeaderLeft>
        <Icon>search</Icon>
        <input placeholder='Search' type='text' />
      </HeaderLeft>
      <HeaderRight>
        <Avatar src={user?.images[0].url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </HeaderRight>

      {console.log(user?.images)}
    </HeaderRoot>
  );
};

export default Header;
