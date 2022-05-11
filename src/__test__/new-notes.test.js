import { render,fireEvent, screen} from '@testing-library/react';
import NewNote from '../components/new-notes';
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'
import { note } from '../firebase/firebase.js';

jest.mock('../firebase/firebase.js');

describe('new note', () => {
    it('should call note', () => {
      const history = createMemoryHistory()

      render(
        <Router location={history.location} navigator={history}>
      <NewNote />
      </Router>
      )
      // screen.debug()
      const Title = screen.getByPlaceholderText('title:')
      const Text = screen.getByPlaceholderText('write:')
      fireEvent.change(Title, {target: {value: 'compras de casa'}})
      fireEvent.change(Text, {target: {value: 'comprar leche, pan, jabón y aceite'}})
      const buttonCheckNote = screen.getByRole('button',{name:"check"})
      fireEvent.click(buttonCheckNote)
    //   fireEvent.click(buttonGoogle);
      

      expect(note).toHaveBeenCalledWith('compras de casa', 'comprar leche, pan, jabón y aceite');
    })

});