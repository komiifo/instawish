import React from 'react';
import { useUser } from '../contexts/UserContext';
import { redirect } from 'react-router-dom';


export const useProtectedLoader = () => {
    const { isLoggedOn } = useUser();
    // console.log('1', isLoggedOn);

    function protectedLoader({ request }) {
        // Lorsqu'on ne connaît pas encore l'état de l'utilisateur
        if (isLoggedOn === undefined) {
            return <p>Chargement...</p>;
        }

        if (isLoggedOn === false) {
            let params = new URLSearchParams();
            params.set("from", new URL(request.url).pathname);

            return redirect("/login?" + params.toString());
        }

        return null;
    }
    return protectedLoader;
};