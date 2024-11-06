import React from "react";
import './Header.css';


const Header = () => {
    return(
        <div className="header">
            <h1>WellnessVistha</h1>
        <div className="icons">
             <ul> 
            <li>  <a href="/#">Home</a></li>
            <li>  <a href="/#">About</a></li>
            <li> <a href="/#">Contact</a></li>
             <li> <a href="/#">Services</a></li>
            </ul>
            </div>
        </div>

    )
}
export default Header;