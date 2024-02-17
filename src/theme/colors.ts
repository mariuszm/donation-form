const colors = {
  midnightGray: '#4d6475',
  gray: '#e9eef2',
  salmon: '#ffdbcb',
  midnightPurple: '#423c66',
  purpleGray: '#595d7b',
  stroke: '#f4f8fa',

  // defaults
  black: '#000',
  white: '#fff',
  blueGray900: '#1e2a32',

  button: {
    primary: {},
  },
} as const;

const componentsPalette = {
  button: {
    primary: {
      main: colors.midnightPurple,
      hover: '#645d93',
      text: colors.white,
      active: '#241e47',
    },
    white: {
      main: colors.white,
      hover: '#b2a7f41a',
      text: colors.purpleGray,
      active: '#b2a7f440',
    },
  },
  navButton: {
    main: colors.white,
    hover: '#f3f5fe',
    active: '#e8eaf2',
  },
  closeButton: {
    main: 'transparent',
    hover: '#f2d0c1',
  },
} as const;

export { colors, componentsPalette };
