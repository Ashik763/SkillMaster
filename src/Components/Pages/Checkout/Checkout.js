import React, { useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';
import "./Checkout.css";
import { MoodContext } from "../../Contexts/Mood";
const notify = () => {
  toast('We gonna let you know later 😉');

}
                                                                                                                                                                                                                                                                                      
const Checkout = () => {
  const {mood} = useContext(MoodContext);

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-center">
        <div className={mood === 'day'?  "row d-flex justify-content-center ": ' row d-flex justify-content-center night'}>
          <div className=" card-container">
            <div className={mood === 'day' ?"card" : "card border night"}>
              <div className="card-body">
                <h3 className="card-title">Monthly</h3>
                <span className="fs-2">
                  $39 <small>/month</small>
                </span>
                <p className="card-text">
                  Access all premium courses, workshops, and mobile apps.
                </p>
                <button onClick={notify} className="btn btn-primary"> Start Learning</button>

              </div>
              <div className="card-footer d-flex flex-column ">
                   
                    <li> 150+ premium courses</li>
                    <li> Bookmarks and course progress  </li>
                    <li>  Bookmarks and course progress </li>
                    <li> Mobile apps with offline playback   </li>
                    <li>Q+A during live online workshops</li>
                    
              </div>
            </div>
          </div>
          <div className=" card-container">
            <div className={mood === 'day' ?"card" : "card border night"}>
              <div className="card-body">
                <h3 className="card-title">Yearly</h3>
                <span className="fs-2">
                  $390 <small>/year</small>
                </span>
                <p className="card-text">
                Billed yearly. Access all premium courses, workshops, and mobile apps.
                </p>
                <button onClick={notify} className="btn btn-danger"> Start Learning</button>
              </div>
              <div className="card-footer d-flex flex-column ">
                   
                   <li> 150+ premium courses</li>
                   <li> Bookmarks and course progress  </li>
                   <li>  Bookmarks and course progress </li>
                   <li> Mobile apps with offline playback   </li>
                   <li>Q+A during live online workshops</li>
                   
             </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Checkout;
