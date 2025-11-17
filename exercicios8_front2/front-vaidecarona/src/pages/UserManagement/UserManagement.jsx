// components/UserManagement/UserManagement.jsx
import { useNavigate } from 'react-router-dom'; // ← ADICIONA
import { useUsers } from '../../hooks/useUsers';
import UserSearch from '../../components/UserSearch/UserSearch';
import UserStates from '../../components/UserStates/UserStates';
import UserTable from '../../components/UserTable/UserTable';
// import EditUserModal from '../../components/EditUserModal/EditUserModal'; // ← REMOVE

import '../../styles/index.css';

function UserManagement() {
  const navigate = useNavigate(); // ← ADICIONA
  
  // Hook customizado com toda lógica
  const {
    usuariosData,
    usuariosFiltrados,
    pageState,
    errorMessage,
    searchTerm,
    setSearchTerm,
    loadUsuarios,
    excluirUsuario,
    editarUsuario
  } = useUsers();

  // REMOVE: Estados do modal
  // const [modalOpen, setModalOpen] = useState(false);
  // const [editingUser, setEditingUser] = useState(null);

  // Event Handlers
  const handleBack = () => {
    window.history.back();
  };

  // ✅ NOVO: Navega pra página de edição
  const handleEdit = (usuarioId) => {
    navigate(`/usuarios/editar/${usuarioId}`);
  };

  // REMOVE: Funções do modal
  // const handleCloseModal = () => {
  //   setModalOpen(false);
  //   setEditingUser(null);
  // };

  // const handleSaveUser = async (userData) => {
  //   await editarUsuario(userData);
  //   handleCloseModal();
  // };

  return (
    <main className="main main--users">
      <div className="users-container">
        
        {/* Header com título e botão voltar */}
        <div className="users-header">
          <div className="users-header-content">
            <button className="back-btn" onClick={handleBack}>
              <img src="/assets/img/volta.png" alt="Voltar" className="back-btn-icon" />
            </button>
            <div className="users-title-section">
              <h1 className="users-title">Gerenciamento de Usuários</h1>
              <p className="users-subtitle">
                Gerencia contas de usuários, incluindo visualização, edição e exclusão de informações do usuário.
              </p>
            </div>
          </div>
        </div>

        {/* Barra de pesquisa */}
        <UserSearch 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Estados: loading, error, empty */}
        <UserStates 
          pageState={pageState}
          errorMessage={errorMessage}
          onRetry={loadUsuarios}
        />

        {/* Tabela de usuários */}
        {pageState === 'table' && (
          <UserTable 
            usuarios={usuariosFiltrados}
            onEdit={handleEdit}
            onDelete={excluirUsuario}
          />
        )}

        {/* REMOVE: Modal de edição */}
        {/* <EditUserModal 
          isOpen={modalOpen}
          user={editingUser}
          onClose={handleCloseModal}
          onSave={handleSaveUser}
        /> */}

      </div>
    </main>
  );
}

export default UserManagement;