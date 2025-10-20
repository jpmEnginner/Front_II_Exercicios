// components/Sidebar/Sidebar.jsx - CORRIGIDO
import { useSidebarContext } from '../../contexts/SidebarContext';

function Sidebar() {
  const { isOpen, closeSidebar } = useSidebarContext(); 

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeSidebar();
    }
  };

  const handleLogout = () => {
    if (window.confirm('Tem certeza que deseja sair?')) {
      // Lógica de logout aqui
      alert('Logout realizado!');
      // window.location.href = 'login.html';
    }
  };

  return (
    <>
      {/* Overlay para mobile */}
      <div 
        className={`aside-overlay ${isOpen ? 'active' : ''}`}
        onClick={handleOverlayClick}
      ></div>

      {/* Aside Mobile */}
      <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img src="/assets/img/icone_vdc_meio.png" alt="VaiDeCarona" className="sidebar-logo-image" />
          </div>
          <button 
            className="close-btn" 
            onClick={closeSidebar}
            aria-label="Fechar menu"
          >
            &times;
          </button>
        </div>

        <nav className="sidebar-nav">
          <a href="#" className="sidebar-link">Início</a>
          <a href="#" className="sidebar-link">Usuários</a>
          <a href="#" className="sidebar-link">Suporte</a>
          <a href="#" className="sidebar-link" onClick={handleLogout}>Sair</a>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;