import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GravityFree from 'components/gravityFree';
import defaultTheme from 'themes/default';

const OptionsPage = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GravityFree />
    </ThemeProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<OptionsPage />, root);
