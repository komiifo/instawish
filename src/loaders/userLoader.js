import { getPostsByUser, getDataByUser, getDataFollowersByUser, getDataFollowingsByUser } from '../services/UsersService';

export const loadUserPostsData = async ({ params }) => {
  try {
    const userData = await getPostsByUser(params.id);

    return userData;
  } catch (error) {
    throw new Error('Erreur lors du chargement des données de l\'utilisateur');
  }
};


export const loadUserProfileData = async ({ params }) => {
  try {
    const userData = await getDataByUser(params.id);

    return userData;
  } catch (error) {
    throw new Error('Erreur lors du chargement des données de l\'utilisateur');
  }
};

export const loadUserFollowersData = async ({ params }) => {
  try {
    const userData = await getDataFollowersByUser(params.id);

    return userData;
  } catch (error) {
    throw new Error('Erreur lors du chargement des données de l\'utilisateur');
  }
};

export const loadUserFollowingsData = async ({ params }) => {
  try {
    const userData = await getDataFollowingsByUser(params.id);

    return userData;
  } catch (error) {
    throw new Error('Erreur lors du chargement des données de l\'utilisateur');
  }
};