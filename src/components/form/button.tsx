import { styled } from 'styled-components';

type Variant = 'primary' | 'white';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 16px 24px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.purpleGray};
  text-transform: capitalize;
  cursor: pointer;

  ${({ theme }) => theme.typography.form.button}

  background-color: ${({ theme, variant }) =>
    theme.palettes.component.button[variant].main};
  color: ${({ theme, variant }) =>
    theme.palettes.component.button[variant].text};

  &:hover {
    background-color: ${({ theme, variant }) =>
      theme.palettes.component.button[variant].hover};
  }

  &:active {
    background-color: ${({ theme, variant }) =>
      theme.palettes.component.button[variant].active};
  }
`;
