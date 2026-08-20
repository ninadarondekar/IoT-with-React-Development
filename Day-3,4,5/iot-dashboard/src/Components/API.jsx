import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        const getUsers = async () => {
            try {
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/users'
                )

                setData(response.data)
                console.log(response.data)

            } catch (error) {
                console.log("API is not working!", error)
            }
        }

        getUsers()

    }, [])

    return (
        <>
            <h1>Fetching Users</h1>

            <div className="users-container">
                {data.map((item) => {
                    return (
                        <div className="user-card" key={item.id}>
                            <p className="name">
                                Name: {item.name}
                            </p>

                            <p className="username">
                                Username: {item.username}
                            </p>

                            <p className="email">
                                Email: {item.email}
                            </p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default API