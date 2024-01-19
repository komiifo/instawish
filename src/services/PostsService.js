// Importer le module Axios configuré
import Cookies from 'js-cookie';
import { instance, API_URL } from './axiosConfig';

export const getNewsFeed = async () => {
    try {
        if (Cookies.get("token")) {
            const response = await instance.get(`${API_URL}home`);
            // console.log(response.data);

            return response.data;
        }
    } catch (error) {
        // En cas d'erreur lors de la requête, afficher un message d'erreur détaillé dans la console
        console.error('Erreur lors de la récupération du fil d\'actualité :', error);

        // Propager l'erreur pour permettre une gestion plus approfondie au niveau supérieur de l'application
        throw error;
    }
};

export const likeOrUnlike = async (idPost) => {
    try {
        const response = await instance.get(`${API_URL}liked/${idPost}`);
        console.log( 'like',response);

        return response.data;

    } catch (error) {
        // En cas d'erreur lors de la requête, afficher un message d'erreur détaillé dans la console
        console.error('Erreur lors de la récupération du fil d\'actualité :', error);

        // Propager l'erreur pour permettre une gestion plus approfondie au niveau supérieur de l'application
        throw error;
    }
};