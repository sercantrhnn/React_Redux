import {createSlice} from '@reduxjs/toolkit'
import { addCourse } from './CourseSlice'

const formSlice = createSlice({
    name: "form",
    initialState: {
        name: '',
        description: '',
        cost:0
    },
    reducers:{      //güncellemeler burda reducer içinde yapılır.
        changeName(state,action){
            state.name = action.payload     // inputlardaki değer action.payload ile alınır.
            // console.log(action.payload);
        },
        changeDescription(state, action){
            state.description = action.payload
            // console.log(action.payload);
        },
        changeCost(state, action){
            state.cost = action.payload
            // console.log(action.payload);
        }
    },
    extraReducers(builder){
        builder.addCase(addCourse,(state, action)=>{    //form kaydetme işleminde sonra içindeki değerleri sıfırlama.
            state.name = '';
            state.description = '';
            state.cost = 0;
        })
    }
})
export const {changeName, changeDescription, changeCost} = formSlice.actions;
export const formReducer = formSlice.reducer;