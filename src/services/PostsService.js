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
        console.log('like', response);

        return response.data;
    } catch (error) {
        // En cas d'erreur lors de la requête, afficher un message d'erreur détaillé dans la console
        console.error('Erreur lors de la récupération du fil d\'actualité :', error);

        // Propager l'erreur pour permettre une gestion plus approfondie au niveau supérieur de l'application
        throw error;
    }
};

export const addPost = async (description, picture) => {
    const formData = new FormData();

    formData.append('description', description);
    formData.append('picture', picture);

    try {
        const response = await instance.post(`${API_URL}post/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout du post :', error);
        throw error;
    }
};

export const addComment = async (idPost, content) => {
    try {
        const response = await instance.post(`${API_URL}comment/add/${idPost}`, { content });
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout d\'un commentaire :', error);
        throw error;
    }
};

export const editComment = async (idComment, newContent) => {
    try {
        const response = await instance.post(`${API_URL}comment/edit/${idComment}`, { content: newContent });

        return response.data;
    } catch (error) {
        console.error('Erreur lors de la modification d\'un commentaire :', error);
        throw error;
    }
};

export const removeComment = async (idComment) => {
    try {
        const response = await instance.post(`${API_URL}comment/remove/${idComment}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la suppression d\'un commentaire :', error);
        throw error;
    }
};
