import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const PublicRoutes = ({ children }) => {

    const navigate = useNavigate();

    useEffect(() => {

        if(JSON.parse(localStorage.getItem('isAuth'))) {

            navigate('/home');
            
        }

    },[]);

    return (
        <div>{children}</div>
    )
};

export default PublicRoutes;