import React, { useState } from 'react'

const Form = () => {
    const[name, setName] = useState();
    const[email,setEmail] = useState();
    const[password, setPassword] = useState();
    const[confirmpassword, setConfirmPassword] = useState();
  return (
        <form>    
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-700 text-center">Sign Up</h2>
        <form className="mt-4 space-y-4">
            <div>
                <label className="block text-gray-600 text-sm font-medium">Name</label>
                <input type="text" onChange={(event)=>setName(event.target.value)}className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"/>
            </div>
            <div>
                <label className="block text-gray-600 text-sm font-medium">Email</label>
                <input type="email" onChange={(event)=>setEmail} className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"/>
            </div>
            <div>
                <label className="block text-gray-600 text-sm font-medium">Password</label>
                <input type="password" className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"/>
            </div>
            <div>
                <label className="block text-gray-600 text-sm font-medium"> Confirm Password</label>
                <input type="password" className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"/>
            </div>
            <button type="submit" className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">Sign Up</button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">Already have an account? <a href="#" className="text-blue-500">Login</a></p>
    </div>
        </form>
   
  )
}

export default Form