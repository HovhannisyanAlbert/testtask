import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createTrue } from "typescript";
import { dataType } from "../../employe/EmployeForm";
import { User } from "./type";
import { $authHost } from "../axios";

export const GetAllEmployees = createAsyncThunk(
    "get/employess",
    async()=>{
        const response = await $authHost.get("/employees")
       
        return response.data
    }
)

export const NextPage = createAsyncThunk(
    "next/page",
    async(page:number)=>{
    
           
            const response = await $authHost.get(`/employees?_page=${page}&_limit=2`)
            return response.data
       
    }
)

export const PrevPage = createAsyncThunk(
    "next/page",
    async(page:number)=>{
    
           
            const response = await axios.get(`https://rocky-temple-83495.herokuapp.com/employees?_page=${page}&_limit=2`)
             
                
                
                    return response.data
             }
       
    
)


export const CreateUser = createAsyncThunk(
    "create/user",
    async(data:dataType)=>{
       const response = await $authHost.post("/employees",data)
       return response.data
    }
)

export const DeleteUser = createAsyncThunk(
    "detele/user",
    async(id:number)=>{
      await $authHost.delete(`/employees/${id}`)
     
        
    }
)


export const EditUsers = createAsyncThunk(
    "edit/user",
    async(data:User)=>{
        const {id} = data
   
        const response  =  await axios.post(`/employees/${id}`,data)
        console.log(response.data)

    }
)