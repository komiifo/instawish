import { useUser } from '../contexts/UserContext';
import { redirect } from 'react-router-dom';

// Créez un hook personnalisé pour LOGINACTION --
export const useLoginAction = () => {
  const { logIn } = useUser();

  const loginAction = async ({ request }) => {
    let formData = await request.formData();
    let username = formData.get("username");
    let password = formData.get("password");

    // Validate our form inputs and return validation errors via useActionData()
    if (!username || !password) {
      return {
        error: "Vos identifiants sont incorrects. Vérifiez l’adresse et le mot de passe saisis puis recommencez.",
      };
    }

    const valueFormData = { username: username, password: password };

    try {
      await logIn(valueFormData);
    } catch (error) {
      return {
        error: "Identifiants incorrects",
      };
    }

    let redirectTo = formData.get("redirectTo");
    console.log('redirectTo', redirectTo);
    return redirect(redirectTo || "/");
  };

  return loginAction;
};

// Créez un hook personnalisé pour LOGINLOADER --
export const useLoginLoader = () => {
  const { isLoggedOn } = useUser();

  const loginLoader = async () => {
    if (isLoggedOn === true) {
      return redirect("/");
    }
    return null;
  };

  return loginLoader;
};