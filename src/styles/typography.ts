import { colors } from './colors';

export const fonts = {
  inter: 'Inter',
  rubik: 'Rubik',
  work: 'Work Sans',
};

const defaults = {
  button: `
    font-family: ${fonts.work};
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  `,
  label: `
    font-family: ${fonts.work};
    font-weight: 500;
    color: ${colors.midnightGray}
  `,
} as const;

export const typography = {
  form: {
    button: defaults.button,
    label: `
      ${defaults.label};
      font-size: 14px;
      line-height: 18px;
    `,
    input: `
      font-family: ${fonts.rubik};
      font-weight: 500;

      &::placeholder {
        color: #00000033;
      }
    `,
  },
} as const;
