import 'styled-components';

import type { colors, componentsPalette } from './colors';
import type { fonts, typography } from './typography';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    fonts: typeof fonts;
    palettes: {
      component: typeof componentsPalette;
    };
    typography: typeof typography;
  }
}
