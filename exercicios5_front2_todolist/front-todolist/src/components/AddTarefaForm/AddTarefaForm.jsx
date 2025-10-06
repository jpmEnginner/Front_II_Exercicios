import { useState, useRef } from 'react';
import '../../styles/AddTarefaForm.css';

function AddTarefaForm({ adicionarTarefa }) {
  const [novaTarefaTitulo, setNovaTarefaTitulo] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = () => {
    if (novaTarefaTitulo.trim()) {
      adicionarTarefa(novaTarefaTitulo);
      setNovaTarefaTitulo('');
      inputRef.current.focus(); // Foca no input após adicionar
    }
  };

  return (
    <div className="add-tarefa-form">
      <input
        ref={inputRef}
        type="text"
        placeholder="Digite o título da tarefa..."
        value={novaTarefaTitulo}
        onChange={(e) => setNovaTarefaTitulo(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
        className="input-tarefa"
      />
      <button onClick={handleSubmit} className="btn-adicionar">
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTarefaForm;