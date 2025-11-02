import TodoItem from '../TodoItem/TodoItem';
import '../../styles/TodoList.css';
import { useTarefas } from '../../context/TarefasContext';

function TodoList() {
  const { tarefas, removerTarefa /*, adicionarTarefa, outros se necessário... */ } = useTarefas();
  // Funções relacionadas a passos ainda são locais? Se forem globais, traga para o contexto depois.

  if (!tarefas || tarefas.length === 0) {
    return (
      <div className="vazio">
        <p>📋 Nenhuma tarefa ainda. Adicione uma para começar!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {tarefas.map((tarefa) => (
        <TodoItem
          key={tarefa.id}
          tarefa={tarefa}
          removerTarefa={removerTarefa} // Ajustar depois se for global!
          // adicionarPasso, togglePasso, removerPasso: podem ser migrados para o contexto se necessário!
        />
      ))}
    </div>
  );
}

export default TodoList;