import FormComponent from '../form';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
describe('forms test cases', () => {
  const mockFun = jest.fn();
  // accessbilty test of all fields
  it('all fields are available or accessbilty test', () => {
    render(<FormComponent onSubmit={mockFun} />);

    expect(screen.getByText('Login Form')).toBeOnTheScreen();
    expect(screen.getByText('Email')).toBeOnTheScreen();
    expect(screen.getByText('Password')).toBeOnTheScreen();

    expect(screen.getByTestId('email-input')).toBeOnTheScreen();
    expect(screen.getByTestId('password-input')).toBeOnTheScreen();

    expect(screen.getByTestId('submit-button')).toBeOnTheScreen();
  });

  // input fileds update correctly

  it('input fileds updation test case', () => {
    render(<FormComponent onSubmit={mockFun} />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    fireEvent.changeText(emailInput, 'test.bsb@ocean.com');
    fireEvent.changeText(passwordInput, '123456');

    expect(emailInput.props.value).toBe('test.bsb@ocean.com');
    expect(passwordInput.props.value).toBe('123456');
  });

  // form validation - empty fields

  it('empty fields form validation', () => {
    render(<FormComponent onSubmit={mockFun} />);
    fireEvent.press(screen.getByTestId('submit-button'));

    expect(screen.getByTestId('email-error')).toBeTruthy();
    expect(screen.getByTestId('password-error')).toBeTruthy();
    expect(screen.getByTestId('email-error').props.children).toBe(
      'Email is required',
    );
    expect(screen.getByTestId('password-error').props.children).toBe(
      'Password is required',
    );
  });
  // input fields validation
  it('input fields are valid or not ', () => {
    render(<FormComponent onSubmit={mockFun} />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    fireEvent.changeText(emailInput, 'test.bsb');
    fireEvent.changeText(passwordInput, '12345');

    fireEvent.press(screen.getByTestId('submit-button'));

    expect(screen.getByTestId('email-error').props.children).toBe(
      'Email is invalid',
    );
    expect(screen.getByTestId('password-error').props.children).toBe(
      'Password must be at least 6 characters',
    );
  });

  // form is being submitted with correct values
  it('form submission with correct values', () => {
    render(<FormComponent onSubmit={mockFun} />);
    
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    fireEvent.changeText(emailInput, 'test.bsb@ocean.com');
    fireEvent.changeText(passwordInput, '123456');
    fireEvent.press(screen.getByTestId('submit-button'));

    expect(mockFun).toHaveBeenCalledTimes(1);
    expect(mockFun).toHaveBeenCalledWith({
      email: 'test.bsb@ocean.com',
      password: '123456',
    });
  });
// errors are being disappeared properly
  it('errors disappearing properly', async () => {
    render(<FormComponent onSubmit={mockFun} />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    fireEvent.changeText(emailInput, 'test');
    fireEvent.changeText(passwordInput, '12');
    fireEvent.press(screen.getByTestId('submit-button'));

    expect(screen.getByTestId('email-error')).toBeTruthy();
    expect(screen.getByTestId('password-error')).toBeTruthy();

    fireEvent.changeText(emailInput, 'test.bsb@ocean.com');
    fireEvent.changeText(passwordInput, '123456');
    fireEvent.press(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(()=>screen.getByTestId('email-error')).toThrow();
      expect(()=>screen.getByTestId('password-error')).toThrow();
    });
  });
});
