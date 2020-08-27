import React from "react";

const CourseFee = props => {
  const totalCourse = props.courseAmount;

  const totalFee = totalCourse.reduce((total, course) => total + course.fee, 0);

  return (
    <div>
      <p className='text-center text-warning'>Total Price : {totalFee} tk</p>
    </div>
  );
};

export default CourseFee;
