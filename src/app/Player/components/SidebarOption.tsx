import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';

import React from 'react';

const SidebarOpt = styled.div`
  display: flex;
  font-size: 14px;
  align-items: center;
  color: #b3b3b3;
  height: 40px;
  cursor: pointer;
  transition: 200ms color ease-in;
  &:hover {
    color: white;
  }
  & p {
    margin: 10px 0px 0px 20px;
    font-size: 14px;
  }
`;

const StyledIcon = styled(Icon)`
  padding: 0 10px;
`;

const SidebarOption: React.FC<{
  title: string;
  icon?: any;
}> = ({ title, icon }) => {
  return (
    <SidebarOpt>
      {icon && <StyledIcon>{icon}</StyledIcon>}
      {icon ? <h4>{title}</h4> : <p>{title}</p>}
    </SidebarOpt>
  );
};
export default SidebarOption;
