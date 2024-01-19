import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

const Navbar = () => {
    const { userProfile, logOut } = useUser();
    // console.log(userProfile);

    const profilePhotoUrl = userProfile ? userProfile.imageUrl : '';

    const handleLogout = async () => {
        try {
            await logOut();
            // Redirection après déconnexion, si nécessaire
        } catch (error) {
            console.error("Erreur lors de la déconnexion", error);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
            <div className="container">
                <Link className="btn btn-light mb-3 mt-3" to={`/`}>
                    Accueil
                </Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="fff" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={`https://symfony-instawish.formaterz.fr${profilePhotoUrl}`} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/profile">Modifier mon profil</Link></li>
                                <li><button className="dropdown-item" onClick={handleLogout}>Se déconnecter</button></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
