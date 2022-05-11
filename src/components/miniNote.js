
import '../MiniNote.css';
import React from 'react';
import { useNavigate } from 'react-router';
import { ConfirmDelete } from './customModal';
import Swal from 'sweetalert2'






export const MiniNote =({ note, getNotesInfo })=> {
    const navigate= useNavigate();
    

    const EditNote = () => {
        
        navigate('/edit/note/'+ note.id)
      }
      const Delete= async ()=>{
        const confDelete = await ConfirmDelete(note.id);
        if(confDelete){
            getNotesInfo();
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
        }
        
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
                <button className="delete" onClick= {Delete}>
                </button >
                <button className="edit" onClick={EditNote}>

                </button>
            </div>

        </div>
    )
}
