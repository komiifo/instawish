import React, { useEffect, useState } from "react";
import { getAllUsers } from "../services/UsersService";


const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getNewsPosts() {
            try {
                const allUsers = await getAllUsers();
                setUsers(allUsers);

                // console.log('allUsers', allUsers);
            } catch (error) {
                console.log(error);
            }
        }

        getNewsPosts();
    }, [users]);

    return (
        <>
            <div className="story-container d-flex justify-content-start align-items-center">
                {Object.values(users).map((user, index) => (
                    <div key={index} className="story">
                        <a href={`http://localhost:3000/user/${user.id}`}>
                            <img src={`https://symfony-instawish.formaterz.fr${user.imageUrl}`} alt={user.username} className="story-img" />
                            <p className="story-name">{user.username}</p>
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default User;