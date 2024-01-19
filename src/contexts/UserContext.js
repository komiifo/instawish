// Importations de modules nécessaires depuis React
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

// Importez la fonction de login, logout, auth et profileUserData depuis AuthService
import { login, auth, profileUserData } from '../services/AuthService';


// Création du contexte utilisateur
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // État local pour indiquer si l'utilisateur est connecté
  const [isLoggedOn, setIsLoggedOn] = useState(undefined);

  // État local pour stocker les données du profil utilisateur
  const [userProfile, setUserProfile] = useState(null);

  // Fonction pour gérer le processus de connexion - LOGIN
  const logIn = useCallback(async (formData) => {
    console.log('logIn render');
    try {
      // Utilisation de la fonction de login depuis AuthService.js
      const response = await login(formData);

      // console.log('login', response);
      Cookies.set('token', response.token);
      setIsLoggedOn(true);

      // Appel asynchrone à la fonction pour récupérer les données de profil utilisateur
      // getUserProfile();
    } catch (error) {
      console.error('Erreur lors de la connexion & lors de la récupération du profil :', error);
      // Vous pouvez choisir de gérer l'erreur ici ou de la propager
      throw error;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // Fonction pour gérer le processus de déconnexion - LOGOUT
  const logOut = useCallback(async () => {
    try {
      // Utilisation de la fonction de logout depuis AuthService.js
      // await logout();

      setIsLoggedOn(false);

      setUserProfile(null);

      // Suppression du cookie associé au lieu de l'utilisateur
      Cookies.remove('token');

      <Navigate to="/" replace />;

    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
      throw error;
    }
  }, []);


  // Fonction pour authentifier l'utilisateur - AUTHENTICATE
  const authenticate = useCallback(async () => {
    try {
      await auth();
      setIsLoggedOn(true);

      // Appel asynchrone à la fonction pour récupérer les données de profil utilisateur
      await getUserProfile();

    } catch (error) {
      setIsLoggedOn(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // Fonction pour mettre à jour les données du profil utilisateur
  const getUserProfile = useCallback(async () => {
    try {
      // Appel asynchrone à la fonction pour récupérer les données de profil utilisateur
      const userData = await profileUserData();

      // Mise à jour de l'état local avec les données récupérées
      setUserProfile(userData);

    } catch (error) {
      // Gestion des erreurs en cas d'échec de la récupération du profil
      console.error('Erreur lors de la récupération du profil :', error);
      // Propagation de l'erreur pour une gestion plus spécifique si nécessaire
      throw error;
    }
  }, []);


  const contextValue = useMemo(() => {
    return {
      isLoggedOn,
      userProfile,
      logIn,
      logOut,
      authenticate
    }
  }, [isLoggedOn, userProfile, logIn, logOut, authenticate]);


  // Fournit le contexte avec les valeurs et les fonctions associées
  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personnalisé pour consommer le contexte utilisateur
export const useUser = () => {
  return useContext(UserContext);
};