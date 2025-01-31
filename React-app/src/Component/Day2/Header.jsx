import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
        <h1 className="text-3xl font-bold">GameZone</h1>
        <p className="text-black-500">Your gateway to endless gaming adventures</p>
        <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-end items-center py-4 px-6">
        <nav className="flex space-x-6">
            <ul className="flex gap-2.5">
                <li className="text-blue-600"><Link to="/">Home</Link></li>
                <li className="text-blue-600"><Link to="/Explore">Explore</Link></li>
                <li className="text-blue-600"><Link to="/Footer">Policy</Link></li>
                <li className="text-blue-600"><Link to="/Register">Register</Link></li>
            </ul>
            </nav>
        </div>
        </header>
        </>
       
    )
}
export default Header;