import { BrowserRouter } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';

import Header from './components/Header';
import Footer from './components/Footer';
import AllRoutes from './routes/AllRoutes';



const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>

        <Header />
        <AllRoutes />
        <Footer />

      </BrowserRouter>
    </div>
  )
};


export default App;
