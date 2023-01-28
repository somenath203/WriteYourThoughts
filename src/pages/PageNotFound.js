import { NavLink } from 'react-router-dom';

import useTitle from './../hooks/useTitle';
import PageNotFoundImg from './../assets/images/page-not-found.png';


const PageNotFound = () => {

  useTitle('Page Not Found');
  
  return (
    <section className="pageNotFound">

      <p>404 | Page Not Found</p>

      <img src={PageNotFoundImg} alt="pagenotfoundimg" />

      <NavLink to='/'>
        <button>Back to Home Page</button>
      </NavLink>

    </section>
  )
};

export default PageNotFound;