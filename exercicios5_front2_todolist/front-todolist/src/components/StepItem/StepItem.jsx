import '../../styles/StepItem.css';

function StepItem({ passo, togglePasso, removerPasso }) {
  return (
    <div className={`step-item ${passo.concluido ? 'concluido' : ''}`}>
      <div className="step-content" onClick={togglePasso}>
        <div className="checkbox">
          {passo.concluido && <span className="checkmark">✓</span>}
        </div>
        <span className="step-titulo">{passo.titulo}</span>
      </div>
      <button
        onClick={removerPasso}
        className="btn-remover-passo"
        title="Remover passo"
      >
        ✕
      </button>
    </div>
  );
}

export default StepItem;