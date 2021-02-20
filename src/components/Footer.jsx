import React from 'react'

function Footer(){
    const newDayYear= new Date().getFullYear();
    return <footer>
    <p>copyright {newDayYear}</p>
    </footer>
};

export default Footer;

