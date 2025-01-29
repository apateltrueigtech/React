import React, { useEffect, useState } from "react";
import UserData from "./UserData";
const API = "https://jsonplaceholder.typicode.com/users"
function Day4 (){
    const [users , setUsers] = useState([]);
    const fetchUsers = async(url)=>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            if(data.length>0){
                setUsers(data);
            }
            // console.log(res)
            // console.log(data);
        }catch(e){
            console.error(e)
        }
    }
    useEffect(() => {
        fetchUsers(API);
    }, []);
    // useEffect(() => {
    //   console.log(users)
    // }, [users]);
    return<>
    
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
        <tr className="bg-gray-100">
           <th className="border border-gray-300 px-4 py-2">ID</th> 
           <th>Name</th> 
           <th>Email</th> 
           <th>Address</th> 
        </tr>
        </thead>
        <tbody>
            {
              users.map((data,index)=>(
                <td key={data.id}>
              {data.id}
              {data.name}
              {data.email}
                </td>
              ))
            }
        </tbody>
    </table>
    </>
}
export default Day4;