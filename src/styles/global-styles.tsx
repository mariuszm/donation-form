import { createGlobalStyle } from 'styled-components';

import { colors } from './colors';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-style: normal;
    font-weight: 400;
    background-color: ${colors.stroke};
  }

  input[type="number"] {
    appearance: textfield;
  }
`;
