import './App.css'
import Navbar from './components/Navbar'
import CourseList from './components/CourseList'
import { calculateTotal } from './control/cardSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

function App() {
  const {cardItems} = useSelector((store)=> store.card)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(calculateTotal())
  },[cardItems])

  return (
    <div className="App">

      <Navbar/>
      <CourseList/>
    </div>
  )
}

export default App
