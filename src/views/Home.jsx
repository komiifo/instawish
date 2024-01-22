import React from 'react';
import Posts from '../components/Posts';
import User from '../components/Users';
import Navbar from '../components/modals/Navbar';
import { useUser } from '../contexts/UserContext';

const Home = () => {
    const { userProfile } = useUser();

    return (
        <>
            <div className="container">


                <Navbar />
                <User />
                <Posts />

            </div>
        </>
    )
}

export default Home;