import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';
import { selectCurrentUser } from '../features/auth/authSlice';

const PrivateRoute = () => {
  const user = useSelector(selectCurrentUser);
  return user ? <Outlet /> : <Navigate to='/' replace />
}

export default PrivateRoute;