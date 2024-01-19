import React from 'react';
import { useLocation, Form, useActionData } from 'react-router-dom';

const Login = () => {
  const actionData = useActionData();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const from = params.get("from") || "/";

  return (
    <>
      <div className="container">
        <div className="col-lg-12 col-md-12 mt-5">
          <div className="card bg-secondary shadow border-0">
            <div className="card-body px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Connectez-vous avec vos identifiants</small>
              </div>

              <Form method="post" replace>
                <input type="hidden" name="redirectTo" value={from} />

                {actionData && actionData.error ? (
                  <p style={{ color: "red" }}>{actionData.error}</p>
                ) : null}

                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="bi bi-envelope-fill" />
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Username"
                      type="username"
                      name="username"
                      autoComplete="on"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="bi bi-lock-fill" />
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Mot de passe"
                      type="password"
                      name="password"
                      autoComplete="on"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary my-4" type="submit">
                    Se connecter
                  </button>
                </div>
              </Form>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-xs-6">
              <a
                className="text-light"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <small>Mot de passe oublié ?</small>
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Login;
