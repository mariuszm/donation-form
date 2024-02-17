import type { DefaultTheme } from 'styled-components';

import { colors, componentsPalette } from './colors';
import { fonts, typography } from './typography';

export const theme: DefaultTheme = {
  colors,
  fonts,
  palettes: {
    component: componentsPalette,
  },
  typography,
};
