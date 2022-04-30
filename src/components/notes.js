import { useNavigate } from "react-router-dom";
import "../Notes.css"
import { Header } from "./header";
import { getNotes } from "../firebase/firebase";
import { MiniNote } from "./miniNote";
export default function Notes(){
const navigate = useNavigate(); 
function returnLogin(){
    navigate('/')
}
let localDoc;
 const renderNotes = async () => {
    const posts = await getNotes();
    const arrayNotes = [];
    posts.forEach((doc) => {
      localDoc = { ...doc.data() };
      localDoc.id = doc.id;
      arrayNotes.push(localDoc);
      });
      console.log(arrayNotes);
    return arrayNotes;
  };

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
             autoComplete="off" 
             />
             <button className="noteButton" onClick = {newNote}></button>
                 <img
                 className= "note"
                 src={ require(`../images/newnote.png`)} 
              alt="newnote" />
              <div className="containerNotes">
             <MiniNote/>
             </div>
             </section>
    
        </div>
    );


}