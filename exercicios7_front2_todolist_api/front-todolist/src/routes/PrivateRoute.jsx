import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem('isAuth') === 'true';
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default PrivateRoute;
