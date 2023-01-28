import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

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

        <ToastContainer
          position="bottom-center"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

      </BrowserRouter>
    </div>
  )
};


export default App;
