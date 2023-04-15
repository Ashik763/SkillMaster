import React, { useContext, useState } from 'react';
import "./Register.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AuthContext } from '../../Contexts/AuthProvider';



const Register = () => {
  const [error,setError] = useState('');
  const {signInWithGoogle,createUser,updateUserProfile,setLoading,loading} = useContext(AuthContext);
  const navigate = useNavigate();

const location  = useLocation();
// //console.log();(location);
 const from = location.state?.from?.pathname || '/';
  // //console.log();(value);
  const handleSubmit =  (event) =>{
    event.preventDefault();
    // //console.log();(event)
    const form = event.target;
    const name  = form.name.value;
    const photoURL = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const checked = form.checkbox.checked;
    // //console.log();(name,photoURL, email, password, checked);
    if(checked){
      createUser(email,password)
      .then((userCredential) => {
        
        // Signed in 
        //console.log();("clicked");
        const user = userCredential.user;
        setError('');
        form.reset();
        navigate('/');
        setLoading(true);
        handleUpdateUserProfile(name,photoURL);
       
        //console.log();("successfull",user);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
        setError(errorMessage);
        
      });    
    }
    else{
      setError("please accept terms & conditions");
    }
    //console.log();(checked);

    
    
  }
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
        displayName: name,
        photoURL: photoURL
    }

    updateUserProfile(profile)
        .then(() => { 
          setLoading(false);
        })
        .catch(error =>{ 
          console.error(error);
          setLoading(false);
        
        });
}
  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result =>{
      //console.log();(result);
      setError('');
    
      navigate(from, {replace: true});
      
      handleUpdateUserProfile(result.user.name,result.user.photoURL)
        // handleUpdateUserProfile(name,photoURL);
    })
    .catch(err =>{
      //console.log();(err);
      setError(err.message);
    })
  }
    return (
        <div className="m-5 border login-container d-flex align-items-center">
        <div className=" border login-content p-5 m-auto ">
          <form onSubmit = {handleSubmit}>
            <div className="mb-3">
              <h2 className="text-center"> Register</h2>
              <label htmlFor="name" className="form-label">
               Name
              </label>
              <input
              
                name="name"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
              />
              <label htmlFor="photo" className="form-label">
               photoUrl
              </label>
              <input
              
                name="photoUrl"
                className="form-control"
                id="photo"
                aria-describedby="emailHelp"
                required
              />
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                required
              />
            
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                required
              />
            </div>
            <div className="mb-3">
            <input
                type="checkbox"
                name="checkbox"
                className='me-2'
                required
                
              />
              <label htmlFor="checkbox" className="form-label">
                Accept terms & conditions
              </label>
          
            </div>
        
            <button  type="submit" className="w-100 btn  btn-primary">
              Register
            </button>
            <p className='error text-danger'> <small className='text-danger'>{error} </small>  </p>
          </form>
          <p className="text-center mt-3"> 
          Already have an account?<Link to="/login">Log in</Link>
          </p>
        <div className=' sign-in-options text-center '> 

            <h6>Or you can continue with  </h6>
            <h1> 
                <span onClick={handleGoogleSignIn} className='sign-in-option  sign-in-with-google'><AiOutlineGoogle></AiOutlineGoogle> </span>
                <span className="sign-in-option sign-in-with-github"><AiFillGithub></AiFillGithub> </span>
               
            </h1>

        </div>
          
         
        </div>
      </div>
    );
};

export default Register;