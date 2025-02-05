/* eslint-disable react/prop-types */
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getUser  } from '../core/data/tokenLocalStorageService';
const Protected = ({allowedRoles}) => {
  const location = useLocation();





  const user = getUser()



  return  user &&
    allowedRoles.includes(user?.role) 
    ? (

    <Outlet />
  ) :  user ? (
      <Navigate to={'/unauthorized'} state={{from: location}}/> 
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};


export default Protected;