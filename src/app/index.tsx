import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from '../app/Store/store';

import AppWrapper from './AppWrapper';

const GlobalStyle = createGlobalStyle`
body::-webkit-scrollbar{
  display:none
}
*{
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;

const Application: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppWrapper />
    </Provider>
  );
};

export default Application;
