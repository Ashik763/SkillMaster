import React, { useContext } from "react";
import "./Courses.css";

import CourseDetails from "../../CourseDetails/CourseDetails";
import Sidebar from "../../Sidebar/Sidebar";
import { Outlet, createRoutesFromElements, useLoaderData } from "react-router-dom";
import { MoodContext } from "../../Contexts/Mood";

const Courses = () => {
  const {mood} = useContext(MoodContext);
  const courses = useLoaderData();
  //console.log();(courses);
  return (
    <div className="d-flex justify-content-center  mt-5">
      <div className="row courses-container">
        <div className="sidebar col-md-4 border h-auto p-2">
          <h2 className="text-center "> Available Courses: {courses.length}</h2>
            
            <Sidebar  courses = {courses}></Sidebar>
          
         
        </div>
        <div className="border col-md-7">
           <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Courses;
