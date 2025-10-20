import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/index.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Por enquanto aceita qualquer login
    console.log('Login:', { email, password });
    
    // Redireciona direto pra tela de usuários
    navigate('/usuarios'); // ← MUDOU AQUI
  };

  return (
    <main className="main">
      <div className="login-container">
        <div className="login-form-wrapper">

          <div className="form-logo">
            <img src="/assets/img/icone_vdc_meio.png" alt="VaiDeCarona" className="form-logo-image" />
          </div>

          <form className="login-form" id="loginForm" onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="email" 
                className="form-input" 
                id="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>

            <div className="input-group">
              <input 
                type="password" 
                className="form-input" 
                id="password" 
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            <button type="submit" className="btn btn--primary">Entrar</button>
          </form>

          <div className="signup-link">
            <p className="signup-text">
              Não tem uma conta?
              <a href="/register" className="signup-link-text">Cadastre-se</a>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Login;