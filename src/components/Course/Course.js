import React from "react";
import "./Course.css";
const Course = props => {
  return (
    <div className='course'>
      <h4>Course Name : {props.course.title} </h4>
      <hr />
      <img src={props.course.img} alt='' />
      <p>Price : {props.course.fee} tk</p>
      <button
        onClick={() => props.enrollHandler(props.course)}
        className='btn btn-primary'>
        Enroll Now
      </button>
    </div>
  );
};

export default Course;
