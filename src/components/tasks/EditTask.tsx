import React from 'react'
import { useSelector } from 'react-redux'
import { RootState, usedispatch } from '../features/store/store'
import { updateTask } from '../features/tasks/tasksSlice'

const EditTask = ({setOpen}:any) => {
 const {editTask} = useSelector((state:RootState)=>state.tasks)
 const dispatch = usedispatch()
 const handleCancel = ()=>{
  setOpen(false)
}
const handleChange = (field: string, value: string) => {
  const updatedUser = { ...editTask, [field]: value };
   dispatch(updateTask(updatedUser));
};

const handleSave =() => {
   

  setOpen(false)


}


  return (
    <div>
    <input
    type="text"
    value={editTask.name}
    onChange={(e) => handleChange('name', e.target.value)}
  />
  <input
    type="text"
    value={editTask.description}
    onChange={(e) => handleChange('description', e.target.value)}
  />
  <input
    type="email"
    value={editTask.startDate}
    onChange={(e) => handleChange('startDate', e.target.value)}
  />
  <input
    type="text"
    value={editTask.endDate}
    onChange={(e) => handleChange('endDate', e.target.value)}
  />

  <button onClick={handleSave}>Save</button>
  <button onClick={handleCancel}>  Cancel</button>
</div>
  )
}

export default EditTask