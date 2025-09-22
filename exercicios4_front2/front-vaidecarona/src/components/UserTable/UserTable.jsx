import '../../styles/index.css';


function UserTable({ usuarios, onEdit, onDelete }) {
  
  // Funções de formatação
  const formatarTipoUsuario = (tipo) => {
    const tipos = {
      'ADMINISTRADOR': 'Administrador',
      'MOTORISTA': 'Motorista', 
      'PASSAGEIRO': 'Passageiro'
    };
    return tipos[tipo] || tipo;
  };

  const formatarStatus = (status) => {
    const statusMap = {
      'ATIVO': 'Ativo',
      'INATIVO': 'Inativo',
      'PENDENTE': 'Pendente'
    };
    return statusMap[status] || status;
  };

  const getRoleClass = (tipo) => {
    const roleClasses = {
      'ADMINISTRADOR': 'user-role--admin',
      'MOTORISTA': 'user-role--driver',
      'PASSAGEIRO': 'user-role--passenger'
    };
    return roleClasses[tipo] || 'user-role--default';
  };

  const getStatusClass = (status) => {
    const statusClasses = {
      'ATIVO': 'status--active',
      'INATIVO': 'status--inactive',
      'PENDENTE': 'status--pending'
    };
    return statusClasses[status] || 'status--default';
  };

  const handleDelete = (usuarioId, nomeUsuario) => {
    if (window.confirm(`Tem certeza que deseja excluir o usuário "${nomeUsuario}"? Esta ação não pode ser desfeita.`)) {
      onDelete(usuarioId, nomeUsuario);
    }
  };

  return (
    <div className="users-table-container">
      <div className="table-wrapper">
        <table className="users-table">
          <thead className="table-header">
            <tr>
              <th className="table-th">Nome</th>
              <th className="table-th">Email</th>
              <th className="table-th">Função</th>
              <th className="table-th">Status</th>
              <th className="table-th">Ações</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {usuarios.map(usuario => (
              <tr key={usuario.id} className="table-row">
                <td className="table-td">{usuario.nome}</td>
                <td className="table-td">{usuario.email}</td>
                <td className="table-td">
                  <span className={`user-role ${getRoleClass(usuario.tipo_usuario)}`}>
                    {formatarTipoUsuario(usuario.tipo_usuario)}
                  </span>
                </td>
                <td className="table-td">
                  <span className={`status ${getStatusClass(usuario.status_conta)}`}>
                    {formatarStatus(usuario.status_conta)}
                  </span>
                </td>
                <td className="table-td">
                  <div className="action-buttons-group">
                    <button 
                      className="btn-action btn-action--edit"
                      onClick={() => onEdit(usuario.id)}
                    >
                      Editar
                    </button>
                    <button 
                      className="btn-action btn-action--delete"
                      onClick={() => handleDelete(usuario.id, usuario.nome)}
                    >
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;