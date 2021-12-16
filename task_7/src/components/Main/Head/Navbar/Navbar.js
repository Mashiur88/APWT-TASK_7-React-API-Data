import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
const Navbar = () =>{
    return(
        <div style={{ backgroundColor: "cyan"}}>
            <Link to="/">Home</Link>
            <Link to="/list">Loan List</Link>
            <Link to={`/contact`}>Contact</Link>
        </div>
    );
}
export default Navbar;