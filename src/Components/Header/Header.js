import React, { useContext } from "react";
import { AiOutlineUser } from 'react-icons/ai';
import { FcServices } from 'react-icons/fc';
import { BsSun } from 'react-icons/bs';
import { BsMoonStars } from 'react-icons/bs';

import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../Contexts/AuthProvider";
import { MoodContext } from "../Contexts/Mood";



const Header = () => {


  const {user,logOut} = useContext(AuthContext);
  const {mood,setMood} = useContext(MoodContext);
  const navigate = useNavigate();
  const handleLogOut = () =>{
      logOut()
      .then(() =>{
        //console.log();("logged out");
        navigate('/');
        
      })
      .catch((err) =>{
        //console.log();(err);
      })
  }

  //Mood
  const handleNightMood = () => {
    setMood('night');
  }
  const handleDayMood = () =>{
    setMood('day');
  }
  return (
    <div  className="d-flex justify-content-center   header shadow p-3 bg-body-tertiary rounded">
  <nav className="navbar navbar-expand-lg bg-body-tertiary w-75">
    <div className={mood === 'day' ? " container-fluid" : 'container-fluid night'}>
     <h2><NavLink to='/'  className= { ({ isActive }) => (isActive ? 'active topic-name text-decoration-none' : ' topic-name text-decoration-none')  } > <FcServices className=""> </FcServices>  SkillMaster </NavLink> </h2>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
          <li className="nav-item mood "> {mood=='day' ? <span onClick={handleNightMood}><BsMoonStars></BsMoonStars></span>: <span onClick={handleDayMood}> <BsSun></BsSun>  </span>} </li>
          <li className="nav-item"><NavLink to='/courses'  className= { ({ isActive }) => (isActive ? 'active topic-name text-decoration-none' : ' topic-name text-decoration-none')  } > Courses </NavLink> </li>

          <li className="nav-item"><NavLink to="/blog" className={ ({ isActive }) => (isActive ? ' active topic-name text-decoration-none' : ' topic-name text-decoration-none')  }> Blog </NavLink> </li>
          <li className="nav-item"><NavLink to="/faq" className={ ({ isActive }) => (isActive ? ' active topic-name text-decoration-none' : ' topic-name text-decoration-none')  }> FAQ </NavLink> </li>
          <li className="nav-item">
            <span className={'  topic-name text-decoration-none'   }> 
                      <>
                          {
                              user?.uid ?
                                  <div className="d-flex align-items-center">
                                    <div > 
                                        {user?.photoURL ? <img className="img-fluid user-img me-2" src={user.photoURL} alt ="" /> : <AiOutlineUser></AiOutlineUser> } 
                                          <span>{user?.displayName || user?.uid}</span>
                                    </div>
                                    <button className="btn btn-primary ms-2"  onClick={handleLogOut}>Log out</button>
                                  </div>
                                  :
                                  <>
                                      <Link className="topic-name text-decoration-none " to='/login'>Login </Link>
                                      <span> or </span> 
                                      <Link className="topic-name text-decoration-none"  to='/register'> Register</Link>
                                  </>
                          }


                      </>
          
          
          
          </span> 
          
          </li>
    
         

        </ul>
      </div>
    </div>
  </nav>
</div>
  )
};

export default Header;

