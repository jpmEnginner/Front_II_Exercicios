import { useState, useRef } from 'react';
import { useTarefas } from '../../context/TarefasContext';
import '../../styles/AddTarefaForm.css';

function AddTarefaForm() {
  const [novaTarefaTitulo, setNovaTarefaTitulo] = useState('');
  const inputRef = useRef(null);
  const { adicionarTarefa } = useTarefas();

  const handleSubmit = () => {
    if (novaTarefaTitulo.trim()) {
      // Prepara objeto semelhante ao antigo adicionarTarefa
      const novaTarefa = {
        id: Date.now().toString(),
        titulo: novaTarefaTitulo,
        passos: [],
      };
      adicionarTarefa(novaTarefa);
      setNovaTarefaTitulo('');
      inputRef.current.focus(); 
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