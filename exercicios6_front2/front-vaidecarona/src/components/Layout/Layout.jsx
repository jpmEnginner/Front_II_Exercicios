import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

//arrumar responsividade dos main (nao sei por que ele nao esta pegando)
function Layout() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <main className="main">
        <Outlet /> {/* Aqui renderizam as páginas filhas */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;