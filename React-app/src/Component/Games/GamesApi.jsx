import React from "react";
import useFetch from "./UseGames";
const UsersList =()=>{
    const {data ,loading ,error} = useFetch("http://18.119.113.79:8004/api/v1/casino/all-games")
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error :{error}</p>;
    return (
        <ul>
            {data.map((user)=>{
                <li key ={user.thumbnailUrl}>{}</li>
            })}
        </ul>
    )
};
export default UsersList;