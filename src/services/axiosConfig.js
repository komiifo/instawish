import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = 'https://symfony-instawish.formaterz.fr/';

const token = Cookies.get('token');

const instance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json', // Type de contenu pour les requêtes JSON
        'Authorization': `Bearer ${token}`
    }
});

const API_URL = '/api/';

export { instance, API_URL };