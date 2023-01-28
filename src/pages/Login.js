import { signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { auth, googleProvider } from './../firebase/config';


const Login = () => {

    const navigate = useNavigate();

    const GoogleHandleLogin = () => {

        signInWithPopup(auth, googleProvider)
            .then((data) => {

                localStorage.setItem('isAuth', true);

                toast.success('you have logged in successfully');

                navigate('/home');

            })
            .catch((err) => {

                console.log(err);

                toast.error('something went wrong, please try again');

            });

    }


    return (
        <div className='login-screen'>
            <h1>Write Your Thoughts</h1>
            <p>A place to express your thoughts in front of the whole world</p>
            <button className="auth" onClick={GoogleHandleLogin}>
                <i className="bi bi-google"></i>
                <span>Get Started</span>
            </button>
        </div>
    )
};


export default Login;