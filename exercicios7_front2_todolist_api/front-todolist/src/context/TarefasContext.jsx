import React, { createContext, useContext, useEffect, useState } from 'react';

// Criação do contexto
const TarefasContext = createContext();

// MOCK DE EXEMPLO 
const MOCK_TAREFAS = [
  {
    id: '1',
    titulo: 'Estudar React',
    passos: [
      { id: '1-1', titulo: 'Ver vídeo-aulas', concluido: false },
      { id: '1-2', titulo: 'Praticar hooks', concluido: true }
    ]
  },
  {
    id: '2',
    titulo: 'Ir ao supermercado',
    passos: [
      { id: '2-1', titulo: 'Comprar arroz', concluido: false },
      { id: '2-2', titulo: 'Comprar feijão', concluido: false }
    ]
  }
];

function getInitialTarefas() {
  const tarefasSalvas = localStorage.getItem('tarefas');
  if (tarefasSalvas) {
    try {
      return JSON.parse(tarefasSalvas);
    } catch {
      return MOCK_TAREFAS;
    }
  }
  return MOCK_TAREFAS;
}

// Provider do contexto
export function TarefasProvider({ children }) {
  // Setar estado inicial já direto, sem depender de efeito!
  const [tarefas, setTarefas] = useState(getInitialTarefas);

  // Salva tarefas sempre que mudar
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  // Funções de manipulação de tarefas
  const adicionarTarefa = (novaTarefa) => {
    setTarefas(prev => [...prev, novaTarefa]);
  };
  const removerTarefa = (id) => {
    setTarefas(prev => prev.filter(tarefa => tarefa.id !== id));
  };

  // Funções de manipulação de passos
  const adicionarPasso = (tarefaId, tituloPasso) => {
    setTarefas(prev => prev.map(tarefa => {
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
    setTarefas(prev => prev.map(tarefa => {
      if (tarefa.id === tarefaId) {
        return {
          ...tarefa,
          passos: tarefa.passos.map(passo =>
            passo.id === passoId ? { ...passo, concluido: !passo.concluido } : passo
          )
        };
      }
      return tarefa;
    }));
  };
  const removerPasso = (tarefaId, passoId) => {
    setTarefas(prev => prev.map(tarefa => {
      if (tarefa.id === tarefaId) {
        return {
          ...tarefa,
          passos: tarefa.passos.filter(passo => passo.id !== passoId)
        };
      }
      return tarefa;
    }));
  };

  return (
    <TarefasContext.Provider value={{ tarefas, adicionarTarefa, removerTarefa, adicionarPasso, togglePasso, removerPasso }}>
      {children}
    </TarefasContext.Provider>
  );
}

// Hook customizado para facilitar o uso
export const useTarefas = () => useContext(TarefasContext);
