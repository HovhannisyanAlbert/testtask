import { createSlice } from "@reduxjs/toolkit";
import { GetAllEmployees } from "./employeThunk";
import { initialStateType } from ".";

const initialState:initialStateType = {
    allEmploye:[],
    editUser:[]
}
const employeSlice = createSlice({
    name:"employe",
    initialState,
    reducers:{
         editUser:(state,action)=>{
            state.editUser = state.allEmploye.find((elem)=>elem.id === action.payload)
             
         },
         updateUser:(state,action)=>{
            state.editUser = action.payload
         }

        

    },
    extraReducers:(bulider)=>{
        bulider.addCase(GetAllEmployees.fulfilled,(state,action)=>{
            state.allEmploye = action.payload
        })
    }

})
export const {editUser,updateUser} = employeSlice.actions
export const employeReducer = employeSlice.reducer