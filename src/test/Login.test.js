import { render, } from '@testing-library/react';
import Login from './login.js';
import {
  signInWithGoogle,
} from '../../../src/firebase/firebase.js';
import { signInWithPopup } from '../../../src/firebase/firebase.js';

// jest.mock('../../../src/firebase/firebase.js');



test('renders learn react link', () => {
  render(<Login />);
  
});


describe('loginUserWithGoogle', () => {
  it('Should be a function', async () => {
    expect(typeof signInWithGoogle).toBe('function');
  });
  it('Should return true', async () => {
    const login = await signInWithGoogle();
    expect(login).toBe(true);
  });
  it('Should return false', async () => {
    signInWithPopup.mockRejectedValue();
    const login = await signInWithGoogle();
    expect(login).toBe(false);
  });
});
