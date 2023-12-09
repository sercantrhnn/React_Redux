import {createSlice, nanoid} from '@reduxjs/toolkit'

const courseSlice = createSlice({
    name: "course",
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers:{
        addCourse(state,action){
            // debugger;
            state.data.push({
                name: action.payload.name,
                description: action.payload.description,
                cost: action.payload.cost,
                id: nanoid(),
            })
        },

        removeCourse(state,action){
            //debugger;
            const updateData = state.data.filter((course)=>{  //payloaddn gelen id course id eşit olmayalanları al. 
                return course.id !== action.payload;
            });
            state.data = updateData //state günceller.
        },

        changeSearch(state,action){
            // console.log(action.payload);
            state.searchTerm = action.payload;
        },
    }
})
export const {addCourse, removeCourse, changeSearch} = courseSlice.actions;
export const courseReducer = courseSlice.reducer;