import React from "react";

function Header(){
 return(
    <div className="header">
        <ul>
            <a src="#home"><li>Home</li></a>
            <a src="#about"><li>About</li></a>
            <a src="#experience"><li>Experience</li></a>
            <a src="#qualifications"><li>qualification</li></a>
            <a src="#projects"><li>Projects</li></a>
        </ul>
    </div>
 );
}
export default Header;