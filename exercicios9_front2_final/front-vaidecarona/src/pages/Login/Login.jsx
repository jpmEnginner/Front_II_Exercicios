import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../styles/index.css';

const API_URL = import.meta.env.VITE_API_URL;

function Login() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    navigate('/admin', { replace: true });   // redireciona pós-login
  };

  return (
    <main className="main">
      <div className="login-container">
        <div className="login-form-wrapper">

          <div className="form-logo">
            <img src="/assets/img/icone_vdc_meio.png"
                 alt="VaiDeCarona"
                 className="form-logo-image" />
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>

            <button type="submit" className="btn btn--primary">Entrar</button>
          </form>

          <div className="signup-link">
            <p className="signup-text">
              Não tem uma conta?
              <Link to="/register" className="signup-link-text">Cadastre-se</Link>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Login;