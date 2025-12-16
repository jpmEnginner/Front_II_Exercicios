import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/index.css'; // ou o caminho correto do seu CSS

function Register() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    idade: '',
    sexo: '',
    telefone: '',
    dataNascimento: '',
    cpf: '',
    endereco: '',
    nacionalidade: '',
    tipoUsuario: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aqui você faria o envio para o backend
    console.log('Cadastro:', formData);
    
    // Simulando cadastro bem-sucedido
    alert('Cadastro realizado com sucesso!');
    navigate('/login'); // Redireciona para login
  };

  return (
    <main className="main">
      <div className="signup-container">
        <div className="signup-form-wrapper">

          <div className="form-logo">
            <img src="/assets/img/icone_vdc_meio.png" alt="VaiDeCarona" className="form-logo-image" />
          </div>

          <h1 className="signup-title">Criar Conta</h1>

          <form className="signup-form" id="cadastroForm" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-input" 
                  id="nome" 
                  placeholder="Nome Completo"
                  value={formData.nome}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="input-group">
                <input 
                  type="email" 
                  className="form-input" 
                  id="email" 
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <input 
                  type="password" 
                  className="form-input" 
                  id="senha" 
                  placeholder="Senha"
                  value={formData.senha}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="input-group">
                <input 
                  type="number" 
                  className="form-input" 
                  id="idade" 
                  placeholder="Idade" 
                  min="18" 
                  max="100"
                  value={formData.idade}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <select 
                  className="form-input form-select" 
                  id="sexo"
                  value={formData.sexo}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione o Sexo</option>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                  <option value="O">Outro</option>
                  <option value="N">Prefiro não informar</option>
                </select>
              </div>

              <div className="input-group">
                <input 
                  type="tel" 
                  className="form-input" 
                  id="telefone" 
                  placeholder="Telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <input 
                  type="date" 
                  className="form-input" 
                  id="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="input-group">
                <input 
                  type="text" 
                  className="form-input" 
                  id="cpf" 
                  placeholder="CPF" 
                  maxLength="14"
                  value={formData.cpf}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group input-group--full">
                <input 
                  type="text" 
                  className="form-input" 
                  id="endereco" 
                  placeholder="Endereço Completo"
                  value={formData.endereco}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <select 
                  className="form-input form-select" 
                  id="nacionalidade"
                  value={formData.nacionalidade}
                  onChange={handleChange}
                  required
                >
                  <option value="">Nacionalidade</option>
                  <option value="Brasileira">Brasileira</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Paraguaia">Paraguaia</option>
                  <option value="Uruguaia">Uruguaia</option>
                  <option value="Outra">Outra</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <select 
                  className="form-input form-select" 
                  id="tipoUsuario"
                  value={formData.tipoUsuario}
                  onChange={handleChange}
                  required
                >
                  <option value="">Tipo de usuário</option>
                  <option value="PASSAGEIRO">Passageiro</option>
                  <option value="MOTORISTA">Motorista</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn--primary">Cadastrar</button>
          </form>

          <div className="login-link">
            <p className="login-text">
              Já tem uma conta?
              <a href="/login" className="login-link-text">Faça login</a>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Register;