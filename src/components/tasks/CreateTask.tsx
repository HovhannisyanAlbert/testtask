import React, { useEffect, useState } from 'react'

import { usedispatch } from '../features/store/store'
import { CreateTasks } from '../features/tasks/taskThunk'
import { useNavigate } from 'react-router-dom'


interface taskType{
    name:null |string,
    description:string,
    startDate:string,
    endDate:string,
    employeeId:number
}

const CreateTask = () => {
   

    const id = Number(localStorage.getItem("id"))
    const userName = localStorage.getItem("name")
    const [data,setData] = useState <taskType>({
        name:userName,
        description:"",
        startDate:"",
        endDate:"",
        employeeId:id
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        })

    }
    const navigate = useNavigate()
    const dispatch = usedispatch()
    const handleCreateTask = () =>{
            dispatch(CreateTasks(data)).unwrap().then(()=>{
                localStorage.clear()
                    navigate("/")
            })
            
    }

  return (
    <div>
        <h2> username {userName}</h2>
        <input type='text'  name='description' placeholder='description' value={data.description} onChange={handleChange}/>
        <input type='text' name='startDate' placeholder='startDate' value={data.startDate} onChange={handleChange}/>
        <input type='text'  name='endDate' placeholder='endDate' value={data.endDate}  onChange={handleChange}/>
        <button onClick={handleCreateTask}> createTask</button>
    </div>
  )
}

export default CreateTask