import AddTarefaForm from '../components/AddTarefaForm/AddTarefaForm';
import TodoList from '../components/TodoList/TodoList';
import { useNavigate } from 'react-router-dom';

function PaginaPrincipal() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('user');
    navigate('/login');
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>
            <h1>📝 Minhas Tarefas</h1>
            <p>Organize suas tarefas e passos</p>
          </div>
          <button onClick={handleLogout} style={{padding: '8px 16px', background:'#f44', color:'#fff', border:'none', borderRadius:4}}>Logout</button>
        </header>

        <AddTarefaForm />
        <TodoList />
      </div>
    </div>
  );
}

export default PaginaPrincipal;
