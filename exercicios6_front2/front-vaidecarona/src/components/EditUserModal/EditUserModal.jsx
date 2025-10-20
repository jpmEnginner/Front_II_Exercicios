import { useState, useEffect } from 'react'; // ← Adiciona useEffect
import '../../styles/main/styles.css';
import '../../styles/responsive/mobile.css';
import '../../styles/responsive/tablet.css';
import '../../styles/responsive/desktop.css';

function EditUserModal({ isOpen, user, onClose, onSave }) {
  const [formData, setFormData] = useState({
    id: user?.id || '',
    nome: user?.nome || '',
    email: user?.email || '',
    tipo_usuario: user?.tipo_usuario || '',
    status_conta: user?.status_conta || ''
  });

  // ✅ useEffect (não useState!)
  useEffect(() => {
    if (user) {
      setFormData({
        id: user.id,
        nome: user.nome,
        email: user.email,
        tipo_usuario: user.tipo_usuario,
        status_conta: user.status_conta
      });
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await onSave(formData);
      onClose();
    } catch (error) {
      // Erro já tratado no hook
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="edit-user-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="edit-user-modal">
        <div className="edit-user-header">
          <h2 className="edit-user-title">Editar Usuário</h2>
          <button className="edit-user-close" onClick={onClose}>&times;</button>
        </div>
        
        <form className="edit-user-form" onSubmit={handleSubmit}>
          <div className="edit-user-content">
            
            <div className="edit-field-group">
              <label className="edit-field-label" htmlFor="editUserName">Nome</label>
              <input 
                type="text" 
                className="edit-field-input" 
                id="editUserName" 
                placeholder="Digite o nome do usuário"
                value={formData.nome}
                onChange={(e) => handleChange('nome', e.target.value)}
                required 
              />
            </div>

            <div className="edit-field-group">
              <label className="edit-field-label" htmlFor="editUserEmail">Email</label>
              <input 
                type="email" 
                className="edit-field-input" 
                id="editUserEmail" 
                placeholder="Digite o email do usuário"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required 
              />
            </div>

            <div className="edit-field-group">
              <label className="edit-field-label" htmlFor="editUserRole">Função</label>
              <select 
                className="edit-field-select" 
                id="editUserRole"
                value={formData.tipo_usuario}
                onChange={(e) => handleChange('tipo_usuario', e.target.value)}
                required
              >
                <option value="">Selecione uma função</option>
                <option value="ADMINISTRADOR">Administrador</option>
                <option value="MOTORISTA">Motorista</option>
                <option value="PASSAGEIRO">Passageiro</option>
              </select>
            </div>

            <div className="edit-field-group">
              <label className="edit-field-label" htmlFor="editUserStatus">Status</label>
              <select 
                className="edit-field-select" 
                id="editUserStatus"
                value={formData.status_conta}
                onChange={(e) => handleChange('status_conta', e.target.value)}
                required
              >
                <option value="">Selecione um status</option>
                <option value="ATIVO">Ativo</option>
                <option value="INATIVO">Inativo</option>
                <option value="PENDENTE">Pendente</option>
              </select>
            </div>

          </div>

          <div className="edit-user-actions">
            <button type="button" className="btn-edit-cancel" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-edit-save">
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUserModal;