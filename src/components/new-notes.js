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
const Title = (event)=>{
  setNoteTitle(event.target.value)
}
const Text = (event)=>{
  setNoteText(event.target.value)
}
function Notes(){
    navigate('/notes')
  }



    return <div className= "box">
       <Header/>
            <section className="container">

                <button className= "closePage" onClick= {Notes}></button>
                
                <button aria-label='check' className= "check" onClick= {CheckNote}></button>
               
                <img
                className= "post"
                src={require(`../images/post.png`)}
                alt= "post"/>
                <div className="boxInputs">
                <input
                    type="title"
                    className="inputTitle"
                    placeholder="title:"
                    autoComplete="off" onChange={Title}

                />
                 <input
                    type="noteWrite"
                    className="inputNote"
                    placeholder="write:"
                    autoComplete="off" onChange={Text}


                />
                </div>
                </section>
                </div>
}