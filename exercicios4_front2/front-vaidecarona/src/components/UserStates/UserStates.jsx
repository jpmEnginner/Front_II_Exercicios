import '../../styles/index.css';
function UserStates({ pageState, errorMessage, onRetry }) {
  
  if (pageState === 'loading') {
    return (
      <div className="loading-state">
        <div className="loading-spinner"></div>
        <p>Carregando usuários...</p>
      </div>
    );
  }

  if (pageState === 'error') {
    return (
      <div className="error-state">
        <div className="error-message">
          <h3>Erro ao carregar usuários</h3>
          <p>{errorMessage}</p>
          <button className="btn-retry" onClick={onRetry}>
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  if (pageState === 'empty') {
    return (
      <div className="empty-state">
        <div className="empty-message">
          <h3>Nenhum usuário encontrado</h3>
          <p>Não há usuários para exibir no momento.</p>
        </div>
      </div>
    );
  }

  return null;
}

export default UserStates;