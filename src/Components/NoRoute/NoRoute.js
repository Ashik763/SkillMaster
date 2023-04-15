
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NoRoute.css';
const NoRoute = () => {
    return (
        <div className='not-found d-flex justify-content-center align-items-center'>
            <div className="w-25  text-center">
                <b> 404 </b>
                <p> Not Found 😑</p>
                <NavLink to="/" className={ ({ isActive }) => (isActive ? ' active topic-name text-decoration-none' : ' topic-name text-decoration-none')  }> Go Home</NavLink>
            </div>
          
            
        </div>
    );
};

export default NoRoute;