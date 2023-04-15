import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (
        <div className=' mt-4 d-flex justify-content-center align-items-center bg-dark footer'>
         <p className='text-light text-center'>© Some informations have been taken from <a href="https://frontendmasters.com/" target="_blank" className='text-decoration-none'>FrontendMaster</a>  </p>  
        </div>
    );
};

export default Footer;