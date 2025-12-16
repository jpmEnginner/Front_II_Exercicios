import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './UserList.styles';
import EditUserModal from '../EditUserModal/EditUserModal';
/* import backSvg   from '/assets/icons/arrow-left.svg'; */
/* import searchSvg from '/assets/icons/search.svg'; */
  // <-- novo modal

// MOCK – troque por fetch da API
const USERS = [
  { id: 1, nome: 'Ana Costa',        email: 'ana.costa@email.com',        role: 'passenger', status: 'active' },
  { id: 2, nome: 'Fernanda Souza',   email: 'fernanda.souza@email.com',   role: 'driver',    status: 'active' },
  { id: 3, nome: 'Gabriela Bassani', email: 'gabriela.bassani@gmail.com', role: 'admin',     status: 'active' },
  { id: 4, nome: 'João Silva',       email: 'joao.silva@email.com',       role: 'admin',     status: 'active' },
];

export default function UserList({ onBack }) {
  /* busca */
  const [search,   setSearch]   = useState('');

  /* modal */
  const [selected, setSelected] = useState(null);

  /* filtragem simples */
  const filtered = USERS.filter(u =>
    u.nome.toLowerCase().includes(search.toLowerCase())
  );

  /* label para a badge */
  function roleLabel(role) {
    return role === 'admin'  ? 'Administrador'
         : role === 'driver' ? 'Motorista'
         : 'Passageiro';
  }

  return (
    <>
      <S.Main>
        <S.Container>

          {/* cabeçalho */}
          <S.HeaderLine>
            {/* <S.BackBtn onClick={onBack}><S.BackIcon src={backSvg} /></S.BackBtn> */}
            <S.TitleSection>
              <S.Title>Gerenciamento de Usuários</S.Title>
              <S.Subtitle>
                Gerencie contas de usuários, incluindo visualização, edição e exclusão.
              </S.Subtitle>
            </S.TitleSection>
          </S.HeaderLine>

          {/* busca */}
          <S.SearchWrapper>
            <S.SearchInput
              placeholder="Pesquisar nome"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {/* <S.SearchIcon src={searchSvg} /> */}
          </S.SearchWrapper>

          {/* tabela */}
          <S.TableContainer>
            <S.Table>
              <thead>
                <S.Tr>
                  <S.Th>Nome</S.Th>
                  <S.Th>Email</S.Th>
                  <S.Th>Função</S.Th>
                  <S.Th>Status</S.Th>
                  <S.Th>Ações</S.Th>
                </S.Tr>
              </thead>
              <tbody>
                {filtered.map(u => (
                  <S.Tr key={u.id}>
                    <S.Td>{u.nome}</S.Td>
                    <S.Td>{u.email}</S.Td>
                    <S.Td>
                      <span className={`user-role user-role--${u.role}`}>
                        {roleLabel(u.role)}
                      </span>
                    </S.Td>
                    <S.Td>
                      <span className="status status--active">Ativo</span>
                    </S.Td>
                    <S.Td center>
                      <button
                        className="btn-action btn-action--edit"
                        onClick={() => setSelected(u)}
                      >
                        Editar
                      </button>
                      &nbsp;
                      <button
                        className="btn-action btn-action--delete"
                        onClick={() => alert('excluir ' + u.id)}
                      >
                        Excluir
                      </button>
                    </S.Td>
                  </S.Tr>
                ))}
              </tbody>
            </S.Table>
          </S.TableContainer>

        </S.Container>
      </S.Main>

      {/* modal de edição */}
      <EditUserModal
        open={Boolean(selected)}
        user={selected}
        onClose={() => setSelected(null)}
        onSave={data => {
          alert('salvar usuário: ' + JSON.stringify(data));
          setSelected(null);
        }}
      />
    </>
  );
}