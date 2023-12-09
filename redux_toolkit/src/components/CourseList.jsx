import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCourse } from '../store/silces/CourseSlice';

function CourseList() {
  // const coursesList = useSelector((state)=>{    //uselector erişmeye yarar.
  //   return state.courses.data;   // bu satırdaki courses store.jsx de bulunan ad.
  // })
  const dispatch = useDispatch();
  
  const  {courses}  = useSelector(({ form, courses: { data, searchTerm } }) => {
    
    const filteredCourses = data.filter((course) =>
      course.name.includes(searchTerm)
    );

    return {
      courses: filteredCourses,
    };
    // debugger;
    // return state.courses.data;
  });
  const renderCourses = courses.map((course)=>{
    
    return(
      <div key={course.id} className='panel'>
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <p>{course.cost}</p>
        <button className='button is-danger' onClick={()=>{dispatch(removeCourse(course.id))}}>Sil</button>
      </div>
      
    )
  })
  return (
    <div className='courseList'>{renderCourses}</div>
  )
}

export default CourseList