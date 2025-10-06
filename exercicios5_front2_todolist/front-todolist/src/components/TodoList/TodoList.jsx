import TodoItem from '../TodoItem/TodoItem';
import '../../styles/TodoList.css';

function TodoList({ tarefas, setTarefas }) {
  const removerTarefa = (tarefaId) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== tarefaId));
  };

  const adicionarPasso = (tarefaId, tituloPasso) => {
    setTarefas(tarefas.map(tarefa => {
      if (tarefa.id === tarefaId) {
        const novoPasso = {
          id: Date.now().toString(),
          titulo: tituloPasso,
          concluido: false
        };
        return {
          ...tarefa,
          passos: [...tarefa.passos, novoPasso]
        };
      }
      return tarefa;
    }));
  };

  const togglePasso = (tarefaId, passoId) => {
    setTarefas(tarefas.map(tarefa => {
      if (tarefa.id === tarefaId) {
        return {
          ...tarefa,
          passos: tarefa.passos.map(passo =>
            passo.id === passoId
              ? { ...passo, concluido: !passo.concluido }
              : passo
          )
        };
      }
      return tarefa;
    }));
  };

  const removerPasso = (tarefaId, passoId) => {
    setTarefas(tarefas.map(tarefa => {
      if (tarefa.id === tarefaId) {
        return {
          ...tarefa,
          passos: tarefa.passos.filter(passo => passo.id !== passoId)
        };
      }
      return tarefa;
    }));
  };

  if (tarefas.length === 0) {
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
          removerTarefa={removerTarefa}
          adicionarPasso={adicionarPasso}
          togglePasso={togglePasso}
          removerPasso={removerPasso}
        />
      ))}
    </div>
  );
}

export default TodoList;