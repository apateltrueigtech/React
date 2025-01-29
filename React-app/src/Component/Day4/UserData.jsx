import React from "react";
import { useEffect } from "react";
const UserData = ({users}) => {
    useEffect(() => {
        console.log(users)
      }, [users]);
    return (
        
        <>{
            users?.map((curUser,index)=>{
                const{Id, Name ,Email } = curUser;
                const{street ,city ,zipcode} = curUser.Address
                return (
                    <tr key={index}>
                        <td>{Id}</td>
                        <td>{Name}</td>
                        <td>{Email}</td>
                        <td>{street} ,{city},{" "} , {zipcode}</td>
                    </tr>
                )
            })
        }
        </>
    )
}



export default UserData;