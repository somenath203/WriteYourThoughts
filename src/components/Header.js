import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

import { auth } from './../firebase/config';
import Logo from './../assets/logo.png';


const Header = () => {

  const navigate = useNavigate();

  const GoogleHandleLogout = () => {

    signOut(auth);

    localStorage.setItem('isAuth', false);

    navigate('/');

    toast.success('you have logged out successfully');

  };

  return (
    <header>

      <NavLink to="/" className="logo">
        <img src={Logo} alt="logo" />
        <span>WriteYourThoughts</span>
      </NavLink>

      <nav className="nav">

        <NavLink to='/' className="link">Home</NavLink>

        {JSON.parse(localStorage.getItem('isAuth')) && (
          <>
            <NavLink to='/create' className="link">Create</NavLink>
            <button className="auth" onClick={GoogleHandleLogout}><i className="bi bi-box-arrow-right"></i>Logout</button>
          </>
        )}

      </nav>

    </header>
  )
};


export default Header;



