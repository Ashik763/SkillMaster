import React from "react";
// import "./CourseDetails.css";
import { Link, Outlet, useLoaderData } from "react-router-dom";


const DefaultCourseDetails = () => {
    return (
        <div className="">
        <div className="row">
          <div className="col-md-12 ">
             <p className="fs-1 bold">  Practical Problem Solving with Algorithms </p>
             <div className="d-flex">
                  <div>
                  <img className="teacher_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEvwdM-4kWfgN-DZxuUC_gJH0hD6aHPi0llA&usqp=CAU" alt="teacher"/>
                  </div>
                  
                  <div className="d-flex flex-column justify-content-end ms-2 ">
                      <span className="fs-4"> Tom Hanks</span>
                      <small className="mb-1"> 9 hours, 30 minutes </small>
                  </div>
             </div>
          </div>
          <div className="col-md-12 mt-2 row d-flex">
                  <div className="col-md-6">
                      <img className="img-fluid" src="https://img.freepik.com/free-photo/software-programer-pointing-pencil-source-code-computer-screen-explaining-algorithm-coworker-standing-desk-programmers-discussing-online-cloud-computing-with-team_482257-33535.jpg?size=626&ext=jpg&ga=GA1.1.56007656.1676227757&semt=sph" alt="course_img" />
  
                  </div>
                  <div className="col-md-6">
                      <p> 
                      You’ve likely taken several algorithms and data structures courses and know the “what”, and now it’s time to put the knowledge to practice! Develop better problem-solving skills by thinking through challenges and applying various algorithms and computer science techniques. Use recursion, traversals, acyclic paths, memoization, and garbage collection to optimize your solutions and think like a true algorithmist.
  
                          <h6 className="fs-6 mt-2 published_date">published date: published date: April 14, 2023</h6>
  
                      <p>  
                      </p>  
                      <button className="btn btn-danger"> <Link className="text-decoration-none text-light" to="/checkout"> Get Premium Access   </Link></button>  
                      </p>
  
                  </div>
          </div>
        </div>
      </div>
    );
};

export default DefaultCourseDetails;