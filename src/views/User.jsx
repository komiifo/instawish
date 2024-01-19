import React from 'react';
import { useLoaderData, Link, useParams, Outlet } from 'react-router-dom';
import Navbar from '../components/modals/Navbar';


const User = () => {
    const params = useParams();
    const userId = params.id;

    const loadData = useLoaderData();

    const userPostsData = loadData.userPostsData;
    const userData = loadData.userData;
    const userFollowersData = loadData.userFollowersData;
    const userFollowingsData = loadData.userFollowingsData;

    // console.log(loadData);

    return (
        <>
            <Outlet />
            <div className="container">
                <Navbar/>


                <div className="d-flex">
                    <img width="150px" height="150px" src={`https://symfony-instawish.formaterz.fr${userData.imageUrl}`} className="rounded-circle" alt={`https://symfony-instawish.formaterz.fr${userData.description}`} />


                    <div className="content-container">
                        <h2 className="d-flex username">{userData.username}</h2>
                        <ul className="infos">
                            <li className="info">
                                <span>
                                    <span className="fw-medium">{userPostsData.length}</span>
                                </span> publications
                            </li>
                            <li className="info">
                                <Link to={`/user/${userId}/followers`}>
                                    <span>
                                        <span className="fw-medium">{userFollowersData.length}</span>
                                    </span> followers
                                </Link>

                            </li>
                            <li className="info">
                                <Link to={`/user/${userId}/followings`}>
                                    <span>
                                        <span className="fw-medium">{userFollowingsData.length}</span>
                                    </span> suivi(e)s
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <hr className="mb-3 mt-3" />
                    <p className="fs-4">PUBLICATIONS</p>
                    <div className="posts-user">
                        {userPostsData.length !== 0 ?
                            userPostsData.map((dataPost, index) => (
                                <img key={index} src={`https://symfony-instawish.formaterz.fr${dataPost.imageUrl}`} className="img" alt={`https://symfony-instawish.formaterz.fr${dataPost.description}`}></img>
                            )) :
                            <p>Pas de post actuellement</p>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;