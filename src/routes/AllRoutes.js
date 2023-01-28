import { Routes, Route } from "react-router-dom";

import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

import LoginPage from './../pages/Login';
import Home from '../pages/Home';
import CreateCard from '../pages/CreatePost';
import PageNotFound from '../pages/PageNotFound';


const AllRoutes = () => {
  return (
    <main>
      <Routes>

        <Route path="/" element={<PublicRoutes><LoginPage /></PublicRoutes>} />
        <Route path="/home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="/create" element={<ProtectedRoutes><CreateCard /></ProtectedRoutes>} />
        <Route path="*" element={<ProtectedRoutes><PageNotFound /></ProtectedRoutes>} />

      </Routes>
    </main>
  )
};

export default AllRoutes;


