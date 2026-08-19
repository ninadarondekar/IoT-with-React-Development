import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const API = () => {
            /* useEffect(()=>{

        },[]) */

        const[data, setData] = useState([])

        useEffect(() =>{
            const getUsers = async () =>{
                try {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                    const data = response.data;
                    setData(data)
                    console.log(response.data);
                } catch (error) {
                    console.log("API is not working!", error);

                }
            };
            getUsers();
        },[])
  return (
    <>
        <h1>Fetching Users</h1>
    {/* JSX architecture */}
        {
            data.map((item) =>{
                return(
                    <div key={item.id}>
                        <li style={{color:'blue'}}>{item.username}</li>
                        <p style={{color:'red'}}>{item.email}</p>
                    </div>
                )
            })
        }


    </>
  )
}

export default API