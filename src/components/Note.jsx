import React from 'react';
import note from '../note'

function Note(params){
    return <div className='note'>
    <h1>{params.title}</h1>
    <p>{params.content}</p>
    </div>
};

export default Note;

