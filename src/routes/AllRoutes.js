import { Routes, Route } from "react-router-dom";

import ProtectedRoute from './ProtectedRoutes';
import Home from '../pages/Home';
import CreateCard from '../pages/CreatePost';
import PageNotFound from '../pages/PageNotFound';


const AllRoutes = () => {
  return (
    <main>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/create" element={<ProtectedRoute><CreateCard /></ProtectedRoute>} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </main>
  )
};

export default AllRoutes;


