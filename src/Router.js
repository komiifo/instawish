import React from 'react';

import {
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";

// Views
import Login from "./views/Login";
import Home from "./views/Home";
import User from './views/User';

// Composants
import FollowersModal from './components/modals/FollowersModal';
import FollowingsModal from './components/modals/FollowingsModal';

// Hooks
import { useLoginAction, useLoginLoader } from "./hooks/useLogin";
import { useProtectedLoader } from "./hooks/useAuth";

// Loaders
import { loadUserPostsData, loadUserProfileData, loadUserFollowersData, loadUserFollowingsData } from './loaders/userLoader';

const Router = () => {
    const loginLoader = useLoginLoader();
    const loginAction = useLoginAction();
    const protectedLoader = useProtectedLoader();


    const router = createBrowserRouter([
        {
            path: '/',
            children: [
                {
                    index: true,
                    path: '/',
                    loader: protectedLoader,
                    element: <Home />

                },
                {
                    path: 'login',
                    loader: loginLoader,
                    action: loginAction,
                    element: <Login />
                },
                {
                    path: 'user/:id',
                    loader: async ({ params }) => {
                        // await protectedLoader();

                        const userPostsData = await loadUserPostsData({ params });
                        const userData = await loadUserProfileData({ params });
                        const userFollowingsData = await loadUserFollowingsData({ params });
                        const userFollowersData = await loadUserFollowersData({ params });

                        // Retourner un objet avec toutes les données nécessaires
                        return { userData, userPostsData, userFollowingsData, userFollowersData };
                    },
                    element: <User />,
                    children: [
                        {
                            path: 'followers',
                            loader: async ({ params }) => {

                                const userFollowersData = await loadUserFollowersData({ params });

                                // Retourner un objet avec toutes les données nécessaires
                                return { userFollowersData };
                            },
                            element: <FollowersModal />
                        },
                        {
                            path: 'followings',
                            loader: async ({ params }) => {

                                const userFollowingsData = await loadUserFollowingsData({ params });

                                // Retourner un objet avec toutes les données nécessaires
                                return { userFollowingsData };
                            },
                            element: <FollowingsModal />
                        },
                    ]
                },

            ]
        }
    ]);

    return <RouterProvider router={router} />
}

export default Router;