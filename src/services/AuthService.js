// Importer le module Axios configuré
import { instance, API_URL } from './axiosConfig';

// Fonction pour gérer la requête de connexion
export const login = async (formData) => {
    try {
        // Effectuer une requête POST vers l'endpoint '/login' avec les données du formulaire
        const response = await instance.post(`${API_URL}login_check`, formData);

        // Retourner les données de la réponse
        // console.log(response.data.token);
        return response.data;
    } catch (error) {
        // En cas d'erreur, propager l'erreur pour une gestion ultérieure
        throw error;
    }
};

// Fonction pour gérer la requête de déconnexion
export const logout = async () => {
    try {
        // Effectuer une requête POST vers l'endpoint '/logout'
        await instance.post(`${API_URL}logout`);
    } catch (error) {
        // En cas d'erreur, propager l'erreur pour une gestion ultérieure
        throw error;
    }
};

// Fonction pour vérifier l'authentification en effectuant une requête GET vers '/me'
export const auth = async () => {
    try {
        // Effectuer une requête GET vers l'endpoint '/me'
        await instance.get(`${API_URL}me`);
    } catch (error) {
        // En cas d'erreur, propager l'erreur pour une gestion ultérieure
        throw error;
    }
};

// Fonction asynchrone pour récupérer les données du profil utilisateur
export const profileUserData = async () => {
    try {
        // Effectuer une requête GET vers l'endpoint '/me' en utilisant Axios
        const response = await instance.get(`${API_URL}me`);
        // console.log(response.data);

        // Retourner les données du profil extraites de la réponse
        return response.data;
    } catch (error) {
        // En cas d'erreur lors de la requête, afficher un message d'erreur détaillé dans la console
        console.error('Erreur lors de la récupération du profil :', error);

        // Propager l'erreur pour permettre une gestion plus approfondie au niveau supérieur de l'application
        throw error;
    }
};