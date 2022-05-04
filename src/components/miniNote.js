import { getNotes } from '../firebase/firebase';
import '../MiniNote.css';
import NewNote from './new-notes';
import EditNote from './edit-note';
import { useNavigate } from 'react-router';




export function MiniNote({ note }) {
    const navigate= useNavigate();

    const editNote = () => {
        console.log('/edit/note/'+ note.id)
        navigate('/edit/note/'+ note.id)
      }
    return (

        <div className="contenedor">

            <img
                className="notes cajita"
                src={require(`../images/notes.png`)}
                alt="notes" />
            <div className="texto-encima" >

                <p className="textNote cajita">{note.title}
                </p>
                <button className="delete">
                </button>
                <button className="edit" onClick={editNote}>

                </button>
            </div>

        </div>
    )
}
