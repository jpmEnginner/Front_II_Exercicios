import { useState, useEffect } from 'react';
import AddTarefaForm from './components/AddTarefaForm/AddTarefaForm';
import TodoList from './components/TodoList/TodoList';
import './styles/App.css';


function App() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (titulo) => {
    const novaTarefa = {
      id: Date.now().toString(),
      titulo: titulo,
      passos: []
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>📝 Minhas Tarefas</h1>
          <p>Organize suas tarefas e passos</p>
        </header>

        <AddTarefaForm adicionarTarefa={adicionarTarefa} />

        <TodoList tarefas={tarefas} setTarefas={setTarefas} />
      </div>
    </div>
  );
}

export default App;