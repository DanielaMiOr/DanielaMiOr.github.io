import "../Notes.css"



export default function Notes(){
    return (
        <div  className="noteBox">
            <header className="logoletters boxLogo">Space Note
                <img
                className="imagenLogo boxLogo"
                src={ require(`../images/logo.png`)} 
              alt="logo" />
             </header>
             <section className="containerHome">
             <input 
             type= "look for your note..."
             className="seeker"
             />
             
             </section>
    Página Notes 
        </div>
    );


}