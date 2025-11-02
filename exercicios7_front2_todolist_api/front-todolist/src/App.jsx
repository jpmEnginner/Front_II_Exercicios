import { TarefasProvider } from './context/TarefasContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTarefaForm from './components/AddTarefaForm/AddTarefaForm';
import TodoList from './components/TodoList/TodoList';
import './styles/App.css';
import Login from './pages/Login';
import PaginaPrincipal from './pages/PaginaPrincipal';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <TarefasProvider>
      <Router>
        <Routes>
          {/* Login - pública */}
          <Route path="/login" element={<Login />} />

          {/* Página principal - restrita */}
          <Route path="/" element={
            <PrivateRoute>
              <PaginaPrincipal />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </TarefasProvider>
  );
}

export default App;