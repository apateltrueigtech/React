import React from "react";
const Header = () => {
    return (
        <>
        <h1 className="text-3xl font-bold">GameZone</h1>
        <p className="text-black-500">Your gateway to endless gaming adventures</p>
        <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-end items-center py-4 px-6">
        <nav className="flex space-x-6">
            <ul className="flex gap-2.5">
                <li className="text-blue-600" >Home</li>
                <li className="text-blue-600">About</li>
                <li className="text-blue-600">Contact Us</li>
                <li className="text-blue-600">Register</li>
            </ul>
            </nav>
        </div>
        </header>
        </>
       
    )
}
export default Header;