import { Navigate } from "react-router-dom";


const ProtectedRoutes = ({ children }) => {

  const isAuth = JSON.parse(localStorage.getItem('isAuth'));
  

  return isAuth ? children : <Navigate to='/' />

};


export default ProtectedRoutes;

