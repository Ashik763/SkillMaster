import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Login from '../Pages/Login/Login';

const PrivateRoute = ({children}) => {
    const {user,setLoading} = useContext(AuthContext);
    // const navigate = useNavigate();
    const location = useLocation();
    //console.log();(location);
    if( ! user?.email){
        // setLoading(false);
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;