import '../New-Notes.css';
import { useNavigate, useParams } from 'react-router';
import {  getNoteEdit, updateNote } from '../firebase/firebase';
import { Header } from "./header";
import { useState, useEffect } from "react";

export default function EditNote(){
let { id } = useParams();
const [noteTitle, setNoteTitle] = useState("");
const [noteText, setNoteText] = useState("");
const [noteDoc, setNoteDoc] = useState({});

const navigate= useNavigate();
function CheckNote(){
    
const updatedNote = noteDoc;
updatedNote.title = noteTitle;
updatedNote.note =  noteText;
  updateNote(id, updatedNote);  
  navigate('/notes') 
}

function Notes(){
    navigate('/notes')
  }
const getNoteInfo = async()=>{
  console.log(id)
   const docNoteEdit =  await  getNoteEdit(id);
   const noteEdit = docNoteEdit.data();
   console.log(noteEdit)
   setNoteText(noteEdit.note)
   setNoteTitle(noteEdit.title)
   setNoteDoc(noteEdit)
}
  useEffect(() => {
    getNoteInfo();
  }, [])

    return <div className= "box">
       <Header/>
            <section className="container">

                <button className= "closePage" onClick= {Notes}></button>
              
                <button className= "check" onClick= {CheckNote}></button>
              
                <img
                className= "post"
                src={require(`../images/post.png`)}
                alt= "post"/>
                <div className="boxInputs">
                <input
                    type="title"
                    className="inputTitle"
                    placeholder="title:" 
                    value = {noteTitle}
                    autoComplete="off" onChange={(event) =>{setNoteTitle(event.target.value)}}

                />
                 <input
                    type="noteWrite"
                    className="inputNote"
                    placeholder="write:"
                    value ={noteText}
                    autoComplete="off" onChange={(event) =>{setNoteText(event.target.value)}}


                />
                </div>
                </section>
                </div>
}
// import { useNavigate } from "react-router";
// import { getNoteEdit, note } from "../firebase/firebase"


// export default function EditNote() {
    
//     const editNote = async () => {
//         const docId = Event.target.dataset.id;
//         const edit = await getNoteEdit(docId);
//         const postData = note.data();
//         postData.text = note.value;
//         console.log(editNote)
//         //  updateText(
//         //    docId,
//         //    postData,
//         //  );

//     }
    
//     return <div>{() => edit()}</div>
// }

