import { NavLink } from "react-router-dom";
import { signInWithPopup, signOut } from 'firebase/auth';
import { useSnackbar } from 'notistack';

import { auth, googleProvider } from './../firebase/config';
import Logo from './../assets/logo.png';
import { useState } from "react";


const Header = () => {

  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuth')) || false);


  const { enqueueSnackbar } = useSnackbar();


  const GoogleHandleLogin = () => {

    signInWithPopup(auth, googleProvider)
      .then((data) => {

        setIsAuth(true);

        localStorage.setItem('isAuth', true);

        enqueueSnackbar('you are logged in successfully', { variant: 'success', anchorOrigin: { vertical: 'bottom', horizontal: 'center' }});

      })
      .catch((err) => {

        setIsAuth(false);

        console.log(err);

        enqueueSnackbar('something went wrong', { variant: 'error', anchorOrigin: { vertical: 'bottom', horizontal: 'center' }});

      });

  }

  const GoogleHandleLogout = () => {

    signOut(auth);

    localStorage.setItem('isAuth', false);

    setIsAuth(false);

    enqueueSnackbar('you are logged out successfully', { variant: 'success', anchorOrigin: { vertical: 'bottom', horizontal: 'center' }});

  };

  return (
    <header>

      <NavLink to="/" className="logo">
        <img src={Logo} alt="logo" />
        <span>WriteYourThoughts</span>
      </NavLink>

      <nav className="nav">

        <NavLink to='/' className="link">Home</NavLink>

        {isAuth ? (
          <>
            <NavLink to='/create' className="link">Create</NavLink>
            <button className="auth" onClick={GoogleHandleLogout}><i className="bi bi-box-arrow-right"></i>Logout</button>
          </>
        ) : (
          <>
            <button className="auth" onClick={GoogleHandleLogin}><i className="bi bi-google"></i>Login</button>
          </>
        )}

      </nav>

    </header>
  )
};


export default Header;



