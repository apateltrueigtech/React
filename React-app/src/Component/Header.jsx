import React from "react";
import { Link } from "react-router-dom";
function Header (){
    return (
        <>
        <div className="h-25 p-4 mt-2 flex justify-between bg-blue-500">
        <div>
        <img src="https://png.pngtree.com/png-vector/20210227/ourmid/pngtree-neon-game-zone-with-console-and-triangle-png-image_2964646.jpg" className="h-30" alt ="Logo"></img>
        </div>
            <ul className="flex gap-3 text-white font-medium items-center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About Us</Link></li>
                <li><Link to="/Explore">Explore</Link></li>
                <li ><Link to="/Register">Register</Link></li>
            </ul>
            </div>
        </>
       
    )
}
export default Header;