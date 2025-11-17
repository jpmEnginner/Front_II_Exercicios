// uma observacao: o CSS ele sera alterado depois para cada componente, nao foi feita a divisao aqui porque seria muita coisa em pouco tempo

/*
  O jeito deveria estar assim

  Footer.jsx
  Footer.css (incluindo as media queries)

  Porem nao esta ,vou mexer nisso posteriormente (CSS esta uma BAGUNÇA ,NAO RECOMENDO MEXER!)

*/


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SidebarProvider } from './contexts/SidebarContext';
import Layout from './components/Layout/Layout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import UserManagement from './pages/UserManagement/UserManagement';
import EditUser from './components/EditUserTest/EditTest';


function App() {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <Routes>
          {/* TODAS as rotas COM Layout (header/footer/sidebar) */}
          <Route path="/" element={<Layout />}>
            {/* Rota raiz redireciona para login */}
            <Route index element={<Navigate to="/login" replace />} />
            
            {/* Login e Register COM Layout */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Outras páginas futuras */}
            <Route path="/usuarios" element={<UserManagement />} />
            <Route path="/usuarios/editar/:id" element={<EditUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;