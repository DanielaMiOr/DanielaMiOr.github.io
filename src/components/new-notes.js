import '../New-Notes.css';
import { useNavigate } from 'react-router';

export default function NewNote(){

const navigate= useNavigate();
function ChekNote(){
    navigate('/notes')
}

function Notes(){
    navigate('/notes')
  }



    return <div className= "box">
       <header className="logoletters boxLogo">Space Note
                <img
                    className="imagenLogo boxLogo"
                    src={require(`../images/logo.png`)}
                    alt="logo" />
            </header>
            <section className="container">

                <button className= "closePage" onClick= {Notes}></button>
                <img
                className= "closeNote"
                src={require(`../images/closeNote.png`)}
                alt= "close"/>
                <button className= "check" onClick= {ChekNote}></button>
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
                    autoComplete="off" onChange

                />
                 <input
                    type="noteWrite"
                    className="inputNote"
                    placeholder="write:"
                    autoComplete="off" onChange

                />
                </div>
                </section>
                </div>
}