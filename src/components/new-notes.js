import '../New-Notes.css';
import { useNavigate } from 'react-router';
import { note } from '../firebase/firebase';
import { Header } from "./header";
import { useState } from "react";

export default function NewNote(){
const [noteTitle, setNoteTitle] = useState("");
const [noteText, setNoteText] = useState("");

const navigate= useNavigate();
function CheckNote(){
console.log(noteTitle);
console.log(noteText);

      note( noteTitle, noteText)
    navigate('/notes')
}

function Notes(){
    navigate('/notes')
  }



    return <div className= "box">
       <Header/>
            <section className="container">

                <button className= "closePage" onClick= {Notes}></button>
                <img
                className= "closeNote"
                src={require(`../images/closeNote.png`)}
                alt= "close"/>
                <button className= "check" onClick= {CheckNote}></button>
                <img
                className= "checkNote"
                src={require(`../images/check.png`)}
                alt= "post"/>
                <img
                className= "post"
                src={require(`../images/post.png`)}
                alt= "post"/>
                <div className="boxInputs">
                <input
                    type="title"
                    className="inputTitle"
                    placeholder="title:"
                    autoComplete="off" onChange={(event) =>{setNoteTitle(event.target.value)}}

                />
                 <input
                    type="noteWrite"
                    className="inputNote"
                    placeholder="write:"
                    autoComplete="off" onChange={(event) =>{setNoteText(event.target.value)}}


                />
                </div>
                </section>
                </div>
}