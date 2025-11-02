import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.trim()) {
      localStorage.setItem('isAuth', 'true');
      localStorage.setItem('user', user);
      navigate('/');
    }
  };

  return (
    <div style={{ maxWidth: 320, margin: '60px auto', padding: 24, boxShadow: '0 0 12px #bbb', borderRadius: 8 }}>
      <h2 style={{ textAlign: 'center' }}>Acesso ao TodoList</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={user}
          onChange={e => setUser(e.target.value)}
          style={{ width: '100%', padding: 12, borderRadius: 4, border: '1px solid #ccc', marginBottom: 16 }}
        />
        <button style={{ width: '100%', padding: 12, background: '#0D99FF', color: '#fff', border: 'none', borderRadius: 4 }}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
