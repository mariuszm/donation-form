import CurrencyInput from 'react-currency-input-field';
import { styled } from 'styled-components';

export const FormWrapper = styled.div`
  width: 100vw;
  max-width: 600px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 16px 32px 0 #1e2a3214;
  border-radius: 2px;
  overflow: hidden;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(248px, 1fr));
  grid-column-gap: 24px;
  grid-row-gap: 32px;
  padding: 32px 40px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FormCaption = styled.div`
  background-color: ${({ theme }) => theme.colors.salmon};
  height: 193px;
  padding-left: 40px;
  padding-right: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  h1 {
    font-family: 'Work Sans';
    font-size: 24px;
    font-weight: 600;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.midnightPurple};
  }

  p {
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.purpleGray};
  }
`;

export const ButtonClose = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.palettes.component.closeButton.main};
  background-image: url('/svg/close-icon.svg');
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 10px;
  border: none;

  &:hover {
    background-color: ${({ theme }) =>
      theme.palettes.component.closeButton.hover};
  }
`;

export const InputAmount = styled(CurrencyInput)`
  ${({ theme }) => theme.typography.form.input}
  font-size: 24px;
  padding-left: 40px;
  padding-right: 16px;
  height: 60px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.white};
  background-image: url('/svg/dollar.svg');
  background-position: 8px center;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.purpleGray};
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  grid-column: 1 / -1;
  padding-top: 24px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.stroke};
`;

export const TotalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const TotalLabel = styled.div`
  font-family: 'Work Sans';
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.blueGray900};
`;

export const TotalValue = styled.div`
  font-family: 'Inter';
  font-size: 24px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.purpleGray};
`;

export const InfoBox = styled.div`
  padding: 24px 16px;
  font-family: 'Work Sans';
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${({ theme }) => theme.colors.stroke};
  color: ${({ theme }) => theme.colors.blueGray900};

  strong {
    font-family: 'Inter';
    font-weight: 700;
  }
`;

export const Label = styled.label`
  font-family: 'Work Sans';
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.midnightGray};
  cursor: text;
`;

export const Actions = styled.div`
  display: flex;
  grid-column: 1 / -1;
  gap: 27px;
  padding: 8px;
`;
