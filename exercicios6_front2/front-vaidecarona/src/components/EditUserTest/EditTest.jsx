import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/index.css';

function EditUser() {
  const { id } = useParams(); // ← USA O useParams!
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tipo_usuario: '',
    status_conta: ''
  });
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carregar dados do usuário
    // Depois você substitui por fetch real
    setTimeout(() => {
      // Mock de dados baseado no ID
      const mockUser = {
        id: id,
        nome: `Usuário ${id}`,
        email: `usuario${id}@email.com`,
        tipo_usuario: 'MOTORISTA',
        status_conta: 'ATIVO'
      };
      
      setFormData(mockUser);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Salvando:', formData);
    alert('Usuário atualizado com sucesso!');
    navigate('/usuarios'); // Volta pra lista
  };

  if (loading) {
    return (
      <main className="main">
        <div className="users-container">
          <h2>Carregando...</h2>
        </div>
      </main>
    );
  }

  return (
    <main className="main">
      <div className="users-container">
        <div className="users-header">
          <h1>Editar Usuário #{id}</h1>
        </div>

        <form onSubmit={handleSubmit} className="edit-form">
          <div className="form-group">
            <label>Nome:</label>
            <input
              type="text"
              value={formData.nome}
              onChange={(e) => handleChange('nome', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Função:</label>
            <select
              value={formData.tipo_usuario}
              onChange={(e) => handleChange('tipo_usuario', e.target.value)}
              required
            >
              <option value="">Selecione</option>
              <option value="ADMINISTRADOR">Administrador</option>
              <option value="MOTORISTA">Motorista</option>
              <option value="PASSAGEIRO">Passageiro</option>
            </select>
          </div>

          <div className="form-group">
            <label>Status:</label>
            <select
              value={formData.status_conta}
              onChange={(e) => handleChange('status_conta', e.target.value)}
              required
            >
              <option value="">Selecione</option>
              <option value="ATIVO">Ativo</option>
              <option value="INATIVO">Inativo</option>
              <option value="PENDENTE">Pendente</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="button" onClick={() => navigate('/usuarios')}>
              Cancelar
            </button>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default EditUser;