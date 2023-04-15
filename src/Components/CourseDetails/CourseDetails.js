import React from "react";
import "../CourseDetails/CourseDetails.css";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const {
    course_name,
    course_teacher,
    teacher_img,
    description,
    duration,
    published_date,
    course_img,
  } = courseDetails;

  return (
    <div className="">
      <div className="row">
        <div className="col-md-12 ">
           <p className="fs-1 bold">  {course_name} </p>
           <div className="d-flex">
                <div>
                <img className="teacher_img" src={teacher_img} alt="teacher"/>
                </div>
                
                <div className="d-flex flex-column justify-content-end ms-2 ">
                    <span className="fs-4"> {course_teacher}</span>
                    <small className="mb-1"> {duration} </small>
                </div>
           </div>
        </div>
        <div className="col-md-12 mt-2 row d-flex">
                <div className="col-md-6">
                    <img className="img-fluid" src={course_img} alt="course_img" />

                </div>
                <div className="col-md-6">
                    <p> 
                        {description}

                        <h6 className="fs-6 mt-2 published_date">published date: {published_date}</h6>

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

export default CourseDetails;
