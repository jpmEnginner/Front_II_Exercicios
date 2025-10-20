// components/Header/Header.jsx
import { useSidebarContext } from '../../contexts/SidebarContext';
import '../../styles/layout/header.css';
import '../../styles/responsive/mobile.css';
import '../../styles/responsive/tablet.css';
import '../../styles/responsive/desktop.css';

function Header() {
  //console.log('🔥 Header renderizando...'); // Debug
  
  try {
    const { isOpen, toggleSidebar } = useSidebarContext();
    //console.log('✅ Context funcionando:', { isOpen, toggleSidebar }); // Debug
    
    return (
      <header className="header">
        <div className="header-container">
          <div className="header-logo">
            <img src="/assets/img/icone_vdc_meio.png" alt="VaiDeCarona" className="header-logo-image" />
          </div>

          {/* Botão hambúrguer com lógica React */}
          <button 
            className={`menu-toggle ${isOpen ? 'active' : ''}`}
            onClick={toggleSidebar}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navegação Desktop */}
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#" className="nav-link">Início</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Viagens</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Usuários</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Suporte</a>
              </li>
              <li className="nav-item">
                <div className="user-profile">
                  <img src="/assets/img/perfil_vazio.png" alt="Admin" className="user-avatar" />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  } catch (error) {
    console.error('❌ Erro no Header:', error);
    return <header>Erro no Header: {error.message}</header>;
  }
}

export default Header;