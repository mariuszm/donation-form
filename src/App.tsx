import { useCallback, useState } from 'react';
import { type CurrencyInputProps } from 'react-currency-input-field';
import { formatValue } from 'react-currency-input-field';
import { styled } from 'styled-components';

import FormCaptionIcon from '@/assets/form-caption-icon.svg?react';
import Logo from '@/assets/naturally.svg?react';
import LogoIcon from '@/assets/spa.svg?react';
import { Button } from '@/components/form/button';
import {
  Actions,
  ButtonClose,
  Form,
  FormCaption,
  FormField,
  FormWrapper,
  InfoBox,
  InputAmount,
  Label,
  Total,
  TotalInfo,
  TotalLabel,
  TotalValue,
} from '@/components/form/styles';
import { MonthPicker } from '@/components/month-picker';
import { useDonationStore } from '@/store';

function App() {
  const [amount, setAmount] = useState<string | undefined>();
  const [formattedAmount, setFormattedAmount] = useState<string | undefined>();
  const [total, setTotal] = useState('0');
  const { dateUntil, getMonthName } = useDonationStore();

  const handleOnValueChange: CurrencyInputProps['onValueChange'] = (
    value,
    _,
    values,
  ) => {
    setAmount(value);
    setFormattedAmount(values?.formatted);
  };

  const handleOnChangeMonth = useCallback(
    (numberOfMonths: number) => {
      setTotal(
        formatValue({
          value: `${parseFloat(amount || '0') * numberOfMonths}`,
          decimalScale: 2,
        }),
      );
    },
    [amount],
  );

  return (
    <Container>
      <Header>
        <div>
          <LogoIcon />
          <Logo />
        </div>
      </Header>
      <FormWrapper>
        <FormCaption>
          <FormCaptionIcon />
          <div>
            <h1>The giving block</h1>
            <p>Set up your donation goal!</p>
          </div>
          <ButtonClose />
        </FormCaption>
        <Form>
          <FormField>
            <Label>I can donate</Label>
            <InputAmount
              value={amount}
              placeholder="0.00"
              onValueChange={handleOnValueChange}
              data-testid="input-amount"
            />
          </FormField>
          <FormField>
            <Label>Every month until</Label>
            <MonthPicker today={new Date()} onChange={handleOnChangeMonth} />
          </FormField>
          <Total>
            <TotalInfo>
              <TotalLabel>Total amount</TotalLabel>
              <TotalValue data-testid="total">${total}</TotalValue>
            </TotalInfo>
            <InfoBox data-testid="infobox">
              You will be sending <strong>${formattedAmount || '0.00'}</strong>{' '}
              every month, until{' '}
              <strong>
                {getMonthName()} {dateUntil?.getFullYear()}
              </strong>
              . Thank you!
            </InfoBox>
          </Total>
          <Actions>
            <Button variant="white">cancel</Button>
            <Button variant="primary">continue</Button>
          </Actions>
        </Form>
      </FormWrapper>
    </Container>
  );
}

const Header = styled.div`
  display: none;
  align-items: center;
  height: 80px;
  width: 100vw;
  padding-left: 40px;
  padding-right: 40px;
  background-color: ${({ theme }) => theme.colors.white};

  div {
    display: flex;
    gap: 8px;
    align-items: baseline;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 64px;
  margin: auto;

  @media screen and (min-width: 600px) {
    ${Header} {
      display: flex;
    }

    ${FormCaption} {
      height: 128px;
      flex-direction: row;
      justify-content: flex-start;
      gap: 20px;

      h1 {
        font-size: 32px;
      }
    }

    ${Total} {
      border: none;
      padding-top: 0;
    }

    ${TotalLabel} {
      font-size: 20px;
    }

    ${TotalValue} {
      font-size: 32px;
    }

    ${InfoBox} {
      border-radius: 5px;
    }

    ${ButtonClose} {
      display: none;
    }
  }
`;

export default App;
