import React, {useEffect} from 'react';

import './App.css';
import Router from './Router';

import { useUser } from './contexts/UserContext';



function App() {
  // Utilisation du hook useUser pour obtenir l'état de l'authentification
  const { authenticate } = useUser();

  // Utilisation d'un effet pour s'authentifier lors du chargement initial
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
      authenticate()
  }, [authenticate]);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
