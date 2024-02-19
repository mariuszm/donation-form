import { fireEvent, render, screen } from '@/test/test-utils';

import { InputAmount } from './components/form/styles';
import App from './App';

const setup = () => {
  const utils = render(<InputAmount />);
  const input = utils.container.firstChild as HTMLInputElement;
  return {
    input,
    ...utils,
  };
};

describe('App', () => {
  it('form is visible', () => {
    const { container } = render(<App />);
    expect(screen.getByText(/The giving block/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('InputAmount', () => {
  it('is empty on load', () => {
    render(<App />);
    expect(screen.getByTestId('input-amount')).not.toHaveValue();
  });

  it('should allow numbers only', () => {
    const { input } = setup();
    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: 'abc' } });
    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: '123' } });
    expect(input.value).toBe('123');
  });

  it('should display value as money', () => {
    const { input } = setup();
    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: '12' } });
    expect(input.value).toBe('12');

    fireEvent.change(input, { target: { value: '12345' } });
    expect(input.value).toBe('12,345');

    fireEvent.change(input, { target: { value: '12345.55' } });
    expect(input.value).toBe('12,345.55');

    fireEvent.change(input, { target: { value: '0.5' } });
    expect(input.value).toBe('0.5');

    fireEvent.change(input, { target: { value: '.12345' } });
    expect(input.value).toBe('0.12');
  });
});
