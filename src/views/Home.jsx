import React from 'react';
import Posts from '../components/Posts';
import User from '../components/Users';
import Navbar from '../components/modals/Navbar';

const Home = () => {

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