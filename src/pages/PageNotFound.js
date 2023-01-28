import { NavLink } from 'react-router-dom';

import useTitle from './../hooks/useTitle';
import PageNotFoundImg from './../assets/images/page-not-found.png';
import Navbar from './../components/Header';


const PageNotFound = () => {

  useTitle('Page Not Found');

  return (
    <>
      <Navbar />
      <section className="pageNotFound">

        <p>404 | Page Not Found</p>

        <img src={PageNotFoundImg} alt="pagenotfoundimg" />

        <NavLink to='/home'>
          <button>Back to Home Page</button>
        </NavLink>

      </section>
    </>
  )
};

export default PageNotFound;