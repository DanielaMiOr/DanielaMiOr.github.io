
import { render,fireEvent, screen} from '@testing-library/react';
import Login from '../components/login.js';
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'

import { GoogleAuthProvider, signInWithPopup, auth } from '../firebase/firebase.js';

jest.mock('../firebase/firebase.js');



describe('LoginWithGoogle', () => {
    it('should call signWithPopup', () => {
      const history = createMemoryHistory()

      render(
        <Router location={history.location} navigator={history}>
      <Login />
      </Router>
      )
      // screen.debug()
      const buttonGoogle = screen.getByRole('button',{name:"buttonGoogle"})
      fireEvent.click(buttonGoogle);
      const googleProvider = new GoogleAuthProvider();

      expect(signInWithPopup).toHaveBeenCalledWith(auth, googleProvider);
    })

});




  
