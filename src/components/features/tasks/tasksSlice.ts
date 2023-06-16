import { createSlice } from "@reduxjs/toolkit";
import { GetAllTask, SearchTasks, ShowTask } from "./taskThunk";


const initialState:any = {
    allTask:[],
    showTask:[],
    searchTask:[],
    editTask:[]

}
interface elemType{
    id:number
}
const tasksSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        editTasks:(state,action)=>{
            state.editTask = state.allTask.find((elem:elemType)=>elem.id === action.payload)
        },
        updateTask:(state,action)=>{
            state.editUser = action.payload
         }

    },
    extraReducers:(bulider)=>{
        bulider.addCase(GetAllTask.fulfilled,(state,action)=>{
        
            state.allTask = action.payload
        })
        .addCase(ShowTask.fulfilled,(state,action)=>{
            state.showTask = action.payload
        })
        .addCase(SearchTasks.fulfilled,(state,action)=>{
            state.searchTask = action.payload
        })
    }
})
export const {editTasks,updateTask} = tasksSlice.actions
export const tasksSliceReducer = tasksSlice.reducer