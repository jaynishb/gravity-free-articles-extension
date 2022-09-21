import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import Box from 'components/Box';
import defaultTheme from 'themes/default';
import GravityFree from 'components/gravityFree';

const root = document.createElement('div');
const shadow = root.attachShadow({ mode: 'open' });

const styleContainer = document.createElement('div');
const appContainer = document.createElement('div');

shadow.appendChild(styleContainer);
shadow.appendChild(appContainer);

document.body.appendChild(root);

const App = () => {
  return (
    <StyleSheetManager target={styleContainer}>
      <ThemeProvider theme={defaultTheme}>
        <Box
          position="fixed"
          bottom={3}
          right={3}
        >
          <GravityFree />
        </Box>
      </ThemeProvider>
    </StyleSheetManager>
  );
};

ReactDOM.render(<App />, appContainer);
