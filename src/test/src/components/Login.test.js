// import { act, renderHook } from '@testing-library/react-hooks';
import { render,fireEvent } from '@testing-library/react';
import Login from '../../../components/login.js';
import {
  signInWithGoogle,
} from '../../../components/login.js';
import { GoogleAuthProvider } from '../../../firebase/firebase.js';
// import { createUserWithEmailAndPassword } from '../../..src/firebase/firebase.js';
jest.mock('../../../firebase/firebase.js');

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate
}));

test('renders learn react link', () => {
  render(<Login />);
});
  



describe('googleOnClick', () => {
  it('Should be a function', async () => {
    expect(typeof Login).toBe('function');
  });
  
  it('googleOnClick should call navigate(/notes)', async () => {
    const { findByText } = render(<Login />);
    const buttonGoogle = await findByText("buttonGoogle");
    fireEvent.click(buttonGoogle);
    expect(mockedNavigate).toHaveBeenCalledWith('/notes');

    // expect(typeof Login).toBe('function');
  });
  // it('Should return true', async () => {
  //   const Login = await signInWithGoogle();
  //   expect(Login).toBe(true);
  // });
  // it('Should return false', async () => {
  //   GoogleAuthProvider.mockRejectedValue();
  //   const Login = await signInWithGoogle();
  //   expect(Login).toBe(false);
  // });
});

