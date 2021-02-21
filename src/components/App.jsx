import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import React from "react";
import notes from "../note"

function App() {
    return (
    <div>
    <Header/>
    {notes.map((x) =>
         
        <Note title={x.title}
        content={x.content}
            key={x.key}
        />
    )}
    <Footer/>
    </div>
    )
};

export default App;