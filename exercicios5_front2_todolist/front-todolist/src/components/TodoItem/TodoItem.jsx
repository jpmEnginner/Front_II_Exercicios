import { useState } from 'react';
import StepItem from '../StepItem/StepItem';
import '../../styles/TodoItem.css';


function TodoItem({ tarefa, removerTarefa, adicionarPasso, togglePasso, removerPasso }) {
  const [novoPassoTitulo, setNovoPassoTitulo] = useState('');
  const [mostrarFormPasso, setMostrarFormPasso] = useState(false);

  const todosConcluidos = tarefa.passos.length > 0 && 
    tarefa.passos.every(passo => passo.concluido);

  const handleAdicionarPasso = () => {
    if (novoPassoTitulo.trim()) {
      adicionarPasso(tarefa.id, novoPassoTitulo);
      setNovoPassoTitulo('');
      setMostrarFormPasso(false);
    }
  };

  return (
    <div className={`todo-item ${todosConcluidos ? 'concluida' : ''}`}>
      <div className="todo-header">
        <div className="todo-info">
          <h3 className="todo-titulo">
            {todosConcluidos && <span className="check-icon">✓</span>}
            {tarefa.titulo}
          </h3>
          <span className="todo-contador">
            {tarefa.passos.filter(p => p.concluido).length} / {tarefa.passos.length} passos
          </span>
        </div>
        <button
          onClick={() => removerTarefa(tarefa.id)}
          className="btn-remover"
          title="Remover tarefa"
        >
          🗑️
        </button>
      </div>

      <div className="passos-lista">
        {tarefa.passos.map((passo) => (
          <StepItem
            key={passo.id}
            passo={passo}
            togglePasso={() => togglePasso(tarefa.id, passo.id)}
            removerPasso={() => removerPasso(tarefa.id, passo.id)}
          />
        ))}
      </div>

      {mostrarFormPasso ? (
        <div className="add-passo-form">
          <input
            type="text"
            placeholder="Digite o passo..."
            value={novoPassoTitulo}
            onChange={(e) => setNovoPassoTitulo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAdicionarPasso()}
            className="input-passo"
            autoFocus
          />
          <div className="form-acoes">
            <button onClick={handleAdicionarPasso} className="btn-salvar">
              Salvar
            </button>
            <button
              onClick={() => {
                setMostrarFormPasso(false);
                setNovoPassoTitulo('');
              }}
              className="btn-cancelar"
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setMostrarFormPasso(true)}
          className="btn-add-passo"
        >
          + Adicionar Passo
        </button>
      )}
    </div>
  );
}

export default TodoItem;