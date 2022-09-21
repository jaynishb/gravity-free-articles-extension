import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Box from 'components/Box';
import defaultTheme from 'themes/default';
import GravityFree from 'components/gravityFree';

const Popup = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box display="flex" justifyContent="center" alignItems="center" height="180px" width="250px" padding={1}>
        <GravityFree />
      </Box>
    </ThemeProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
