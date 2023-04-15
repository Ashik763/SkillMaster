import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MoodContext } from "../Contexts/Mood";

const Sidebar = ({courses}) => {
  const {mood} = useContext(MoodContext);
  //console.log();(courses);
  return (
    <div className="mt-4">
      <ol className="list-group">

        {
          courses.map((course) => <li  key={course.course_id} className={ mood==='day'? "list-group-item list-group-item-primary" : 'list-group-item list-group-item-primary night'}>
                                        <span  className="text-dark"> <NavLink className= { ({ isActive }) => (isActive ? 'active topic-name text-decoration-none' : ' topic-name text-decoration-none')  } to={`/courses/${course.course_id}`}  >   {course.course_name}   </NavLink></span>
                                  </li>
          )

        }
      
        
       
        
      </ol>
    </div>
  );
};

export default Sidebar;
