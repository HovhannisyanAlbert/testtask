import React, { useEffect, useState } from 'react'
import { RootState, usedispatch } from '../features/store/store'
import { useSelector } from 'react-redux'
import { SearchTasks } from '../features/tasks/taskThunk'


const SearchTask = () => {
    const [name_like,setName] = useState("")
    const {searchTask} = useSelector((state:RootState)=> state.tasks)
    
    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value)
        
    }
    const dispatch = usedispatch()
    const search = () =>{
        dispatch(SearchTasks(name_like))
    }
        
  
    
  return (
    <div>
        
        <input type='text' value={name_like} onChange={handleChange} />
        <button onClick={search}> search </button>

      

    </div>
  )
}

export default SearchTask