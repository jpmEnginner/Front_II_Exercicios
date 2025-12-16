import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SidebarProvider } from './contexts/SidebarContext';

import Layout from './components/Layout/Layout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AdminDashboard from './pages/DashboardAdmin/DashboardAdm';
import DenunciasPage from './pages/Denuncias/DenunciasPlataforma';
import DenunciaDetailsPage from './pages/DenunciaDetails/DenunciaDetails';
import UserListPage from './pages/UserListPage/UserListPage'
import ConstructionPage from './pages/DashboardUserBuilding/DashboardUserBuilding'

export default function App() {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <Routes>
          {/* raiz → /login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* TUDO dentro do Layout */}
          <Route element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* internas */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/denuncias" element={<DenunciasPage />} />
            <Route path="/admin/denuncias/:id" element={<DenunciaDetailsPage />} />
            <Route path="/admin/usuarios" element={<UserListPage />} />
            <Route path="/construcao" element={<ConstructionPage />} />
          </Route>

          {/* fallback */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
}