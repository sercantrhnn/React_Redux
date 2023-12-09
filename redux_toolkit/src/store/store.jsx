import {configureStore} from '@reduxjs/toolkit'
import { formReducer } from './silces/formSlice'
import { courseReducer } from './silces/CourseSlice'



export const store = configureStore({
    reducer: {
        form: formReducer,
        courses: courseReducer,
    }
})