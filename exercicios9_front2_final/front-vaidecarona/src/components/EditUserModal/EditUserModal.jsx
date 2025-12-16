import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import * as S from './EditUserModal.styles';

export default function EditUserModal({ open, onClose, user, onSave }) {
  /* controla campos locais */
  const [form, setForm] = useState({ name:'', email:'', role:'passenger', status:'active' });

  useEffect(()=>{
    if(user){
      setForm({
        name:  user.nome  || '',
        email: user.email || '',
        role:  user.role  || 'passenger',
        status:user.status|| 'active',
      });
    }
  },[user, open]);

  function handleChange(e){
    setForm(prev=>({...prev,[e.target.name]:e.target.value}));
  }

  function handleSubmit(e){
    e.preventDefault();
    onSave({ ...user, ...form });
  }

  /* nada renderizado se não estiver aberto */
  if(!open) return null;

  return createPortal(
    <S.Overlay open={open}>
      <S.Container>

        {/* header */}
        <S.Header>
          <S.Title>Editar Usuário</S.Title>
          <S.Close onClick={onClose}>&times;</S.Close>
        </S.Header>

        {/* conteúdo */}
        <S.Content onSubmit={handleSubmit}>
          <S.FieldGroup>
            <S.Label>Nome</S.Label>
            <S.Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Digite o nome do usuário"
              required
            />
          </S.FieldGroup>

          <S.FieldGroup>
            <S.Label>Email</S.Label>
            <S.Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Digite o email do usuário"
              required
            />
          </S.FieldGroup>

          <S.FieldGroup>
            <S.Label>Função</S.Label>
            <S.Select name="role" value={form.role} onChange={handleChange}>
              <option value="admin">Administrador</option>
              <option value="driver">Motorista</option>
              <option value="passenger">Passageiro</option>
            </S.Select>
          </S.FieldGroup>

          <S.FieldGroup>
            <S.Label>Status</S.Label>
            <S.Select name="status" value={form.status} onChange={handleChange}>
              <option value="active">Ativo</option>
              <option value="inactive">Inativo</option>
            </S.Select>
          </S.FieldGroup>

          {/* footer */}
          <S.Footer>
            <S.CancelBtn type="button" onClick={onClose}>Cancelar</S.CancelBtn>
            <S.SaveBtn type="submit">Salvar Alterações</S.SaveBtn>
          </S.Footer>
        </S.Content>
      </S.Container>
    </S.Overlay>,
    document.body
  );
}