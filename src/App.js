import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Courses from "./fakaData";
import Course from "../src/components/Course/Course";
import CourseFee from "./components/CourseFee/CourseFee";

function App() {
  const [courseAmount, SetCourseAmount] = useState([]);

  const enrollHandler = course => {
    const updateAmount = [...courseAmount, course];
    SetCourseAmount(updateAmount);
  };
  return (
    <div className='App'>
      <h1 className='text-center'>
        Welcome To <br /> Web Development with Aslam
      </h1>

      <p className='text-center text-warning'>
        Course Purchase Amount : {courseAmount.length}
      </p>
      <CourseFee courseAmount={courseAmount} />

      <div className='courseList'>
        {Courses.map(course => (
          <Course
            key={course.id}
            course={course}
            enrollHandler={enrollHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
