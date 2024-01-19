// Importer le module Axios configuré
import { instance, API_URL } from './axiosConfig';

export const getAllUsers = async () => {
    try {
        const response = await instance.get(`${API_URL}users`);
        // console.log(response.data);

        return response.data;
    } catch (error) {
        // En cas d'erreur lors de la requête, afficher un message d'erreur détaillé dans la console
        console.error('Erreur lors de la récupération des users :', error);

        // Propager l'erreur pour permettre une gestion plus approfondie au niveau supérieur de l'application
        throw error;
    }
};

export const getPostsByUser = async (id) => {
    try {
        const response = await instance.get(`${API_URL}home/${id}`);
        // console.log(response.data);
        // console.log("id get", id);

        return response.data;
    } catch (error) {
        // En cas d'erreur lors de la requête, afficher un message d'erreur détaillé dans la console
        console.error('Erreur lors de la récupération l\'user :', error);

        // Propager l'erreur pour permettre une gestion plus approfondie au niveau supérieur de l'application
        throw error;
    }
};

export const getDataByUser = async (id) => {
    try {
        const response = await instance.get(`${API_URL}user/${id}`);
        // console.log(response.data);

        return response.data;
    } catch (error) {
        // En cas d'erreur lors de la requête, afficher un message d'erreur détaillé dans la console
        console.error('Erreur lors de la récupération l\'user :', error);

        // Propager l'erreur pour permettre une gestion plus approfondie au niveau supérieur de l'application
        throw error;
    }
};

export const getDataFollowersByUser = async (id) => {
    try {
        const response = await instance.get(`${API_URL}follow/followers/${id}`);
        // console.log(response.data);

        return response.data;
    } catch (error) {
        // En cas d'erreur lors de la requête, afficher un message d'erreur détaillé dans la console
        console.error('Erreur lors de la récupération l\'user :', error);

        // Propager l'erreur pour permettre une gestion plus approfondie au niveau supérieur de l'application
        throw error;
    }
};

export const getDataFollowingsByUser = async (id) => {
    try {
        const response = await instance.get(`${API_URL}follow/followings/${id}`);
        // console.log(response.data);

        return response.data;
    } catch (error) {
        // En cas d'erreur lors de la requête, afficher un message d'erreur détaillé dans la console
        console.error('Erreur lors de la récupération l\'user :', error);

        // Propager l'erreur pour permettre une gestion plus approfondie au niveau supérieur de l'application
        throw error;
    }
};