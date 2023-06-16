import React, { useEffect, useState } from 'react'
import { RootState, usedispatch } from '../features/store/store'
import { DeleteTask, GetAllTask } from '../features/tasks/taskThunk'
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import style from "./task.module.css"
import { useSelector } from 'react-redux'
import EditTask from './EditTask';
import { editTasks } from '../features/tasks/tasksSlice';

interface userType {
    name:string
    description:string,
    startDate:string,
    endDate:string,
    id:number
}


const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const AllTask = () => {
    const dispatch = usedispatch()
    useEffect(()=>{
       dispatch(GetAllTask())
    },[])

    const {allTask} = useSelector((state:RootState)=>state.tasks)
    const [open, setOpen] = useState(false)
    const [checkId, setCheckId] = useState(null);
  const deleteTask = (id:number)=>{
    dispatch(DeleteTask(id))
  }

  const editTask = (id:any)=>{
    setCheckId(id);
    dispatch(editTasks(id));
    setOpen(true);
  }

  return (
    <div className={style.allTask}>

        {
            allTask && allTask.map((user:userType)=>(
                <div key={user.id} className={style.userTask}>
                    <span> {user.name}</span>
                    <span> {user.description}</span>
                    <span> {user.startDate}</span>
                    <span> {user.endDate}</span>
                    <button onClick={()=>deleteTask(user.id)}> Delete</button>


                    <button onClick={()=> editTask(user.id)}> Edit</button>

                    {checkId === user.id && (
            <Modal
              open={open}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={{ ...styles }}>
                <EditTask setOpen={setOpen}/>
              </Box>
            </Modal>
          )}
                    

                    </div>
            ))
        }


    </div>
  )
}

export default AllTask