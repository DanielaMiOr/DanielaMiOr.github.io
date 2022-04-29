import { useNavigate } from "react-router-dom";
import "../Notes.css"
import { Header } from "./header";
export default function Notes(){
const navigate = useNavigate(); 
function returnLogin(){
    navigate('/')
}

function newNote(){
  navigate('/newNote')
}



    return (
        <div  className="noteBox">
            <Header/>
             <section className="containerHome">
             <img
                 className= "closeSession"
                 src={ require(`../images/close.png`)} 
              alt="closeSession" />  
              <button className= "close" onClick= {returnLogin}></button>
             <input 
             type= "look for your note..."
             className="seeker"
             placeholder="look for your note..."
             autoComplete="off" onChange
             />
             <button className="noteButton" onClick = {newNote}></button>
                 <img
                 className= "note"
                 src={ require(`../images/newnote.png`)} 
              alt="newnote" />
             
             </section>
    
        </div>
    );


}