import React, { useContext } from 'react';

import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import Spinner from '../Shared/Spinner';
import "./Main.css";
import Footer from '../Footer/Footer';
import { MoodContext } from '../Contexts/Mood';

const Main = () => {
    const {mood} = useContext(MoodContext);

    const {loading} = useContext(AuthContext);
    if(loading){
        return(<Spinner></Spinner>)
    }
    return (
        <div className={mood=='day' ? 'main' : 'main night'} >
            <Header></Header>
            <Outlet> </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;