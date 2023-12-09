import React from 'react'
import { useSelector } from 'react-redux'

function CourseValue() {
  const  {totalcost}  = useSelector(({ form, courses: { data, searchTerm } }) => {
    
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

   let cost =0;

   for(let course of filteredCourses){
    cost+= course.cost
   }
   return {
    totalcost: cost
   }
  });
  return (
    <div className="coursePrice">Toplam Tutar: {totalcost}</div>
  )
}

export default CourseValue