import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import note from "../notes"
import Newnote from "./Newnote"



function App() {
  return (
    <div>
      <Header />
      <Note /> 
      {note.map(content=><Newnote
        key={content.key }
        title={content.title}
        content={content.content}
      />)}
      <Footer />
    </div>
  );
}

export default App;
 