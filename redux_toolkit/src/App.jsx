import { useState } from 'react'
import './App.css'
import CourseForm from './components/CourseForm'
import CourseList from './components/CourseList'
import CourseSearch from './components/CourseSearch'
import CourseValue from './components/CourseValue'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container is-fluid'>
     <CourseForm/>
     <CourseSearch/>
     <CourseList/>
     <CourseValue/>
    </div>
  )
}

export default App
