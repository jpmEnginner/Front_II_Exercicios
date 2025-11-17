import { useState, useEffect } from 'react';
import * as S from './EditUserModal.styles';

function EditUserModal({ isOpen, user, onClose, onSave }) {
  const [formData, setFormData] = useState({
    id: user?.id || '',
    nome: user?.nome || '',
    email: user?.email || '',
    tipo_usuario: user?.tipo_usuario || '',
    status_conta: user?.status_conta || ''
  });

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
    <S.Overlay 
      className={isOpen ? 'active' : ''}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <S.Modal>
        <S.Header>
          <S.Title>Editar Usuário</S.Title>
          <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
        </S.Header>
        
        <S.Form onSubmit={handleSubmit}>
          <S.Content>
            
            <S.FieldGroup>
              <S.Label htmlFor="editUserName">Nome</S.Label>
              <S.Input 
                type="text" 
                id="editUserName" 
                placeholder="Digite o nome do usuário"
                value={formData.nome}
                onChange={(e) => handleChange('nome', e.target.value)}
                required 
              />
            </S.FieldGroup>

            <S.FieldGroup>
              <S.Label htmlFor="editUserEmail">Email</S.Label>
              <S.Input 
                type="email" 
                id="editUserEmail" 
                placeholder="Digite o email do usuário"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required 
              />
            </S.FieldGroup>

            <S.FieldGroup>
              <S.Label htmlFor="editUserRole">Função</S.Label>
              <S.Select 
                id="editUserRole"
                value={formData.tipo_usuario}
                onChange={(e) => handleChange('tipo_usuario', e.target.value)}
                required
              >
                <option value="">Selecione uma função</option>
                <option value="ADMINISTRADOR">Administrador</option>
                <option value="MOTORISTA">Motorista</option>
                <option value="PASSAGEIRO">Passageiro</option>
              </S.Select>
            </S.FieldGroup>

            <S.FieldGroup>
              <S.Label htmlFor="editUserStatus">Status</S.Label>
              <S.Select 
                id="editUserStatus"
                value={formData.status_conta}
                onChange={(e) => handleChange('status_conta', e.target.value)}
                required
              >
                <option value="">Selecione um status</option>
                <option value="ATIVO">Ativo</option>
                <option value="INATIVO">Inativo</option>
                <option value="PENDENTE">Pendente</option>
              </S.Select>
            </S.FieldGroup>

          </S.Content>

          <S.Actions>
            <S.CancelButton type="button" onClick={onClose}>
              Cancelar
            </S.CancelButton>
            <S.SaveButton type="submit">
              Salvar Alterações
            </S.SaveButton>
          </S.Actions>
        </S.Form>
      </S.Modal>
    </S.Overlay>
  );
}

export default EditUserModal;