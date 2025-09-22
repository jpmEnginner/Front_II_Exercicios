// uma observacao: o CSS ele sera alterado depois para cada componente, nao foi feita a divisao aqui porque seria muita coisa em pouco tempo

/*
  O jeito deveria estar assim

  Footer.jsx
  Footer.css (incluindo as media queries)

  Porem nao esta ,vou mexer nisso posteriormente (CSS esta uma BAGUNÇA ,NAO RECOMENDO MEXER!)

*/


import { SidebarProvider } from './contexts/SidebarContext';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import UserManagement from './components/UserManagement/UserManagement';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <SidebarProvider>
      <div className="App">
        <Header />
        <Sidebar />
        <UserManagement />
        <Footer />
      </div>
    </SidebarProvider>
  );
}

export default App;