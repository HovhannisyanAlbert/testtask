import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost } from "../axios";
import axios from "axios";


export const GetAllTask = createAsyncThunk(
    "all/task",
    async()=>{
        const response =await $authHost.get("/tasks")
        return response.data
    }
)

export const CreateTasks = createAsyncThunk(
    "create/task",
    async (data:any) => {
        
         await $authHost.post('/tasks',data)
    
    }
)

export const DeleteTask = createAsyncThunk(
    "delete/task",
    async(id:number)=>{
    
       return  await $authHost.delete(`/tasks/${id}`)
      
    }
)


export const ShowTask = createAsyncThunk(
    "show/task",
    async(id:number)=>{
        const response = await $authHost.get(`/tasks?employeeId=${id}`)
        return response.data
    }
)

export const SearchTasks = createAsyncThunk(
    "search/task",
    async(name:string)=>{
      
         const response = await $authHost.get(`/tasks?name_like=${name}`)
         console.log(response.data)
    }
)



