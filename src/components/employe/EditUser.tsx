
import {  useSelector } from 'react-redux';
import { RootState, usedispatch } from '../features/store/store';
import { updateUser } from '../features/employe/employeSlice';
import { EditUsers } from '../features/employe/employeThunk';


const EditUser = ({setOpen}:any) => {
  
  const {editUser} = useSelector((state:RootState)=>state.employe)

 const dispatch = usedispatch()
  const handleSave =() => {
   
    dispatch(EditUsers(editUser))
    setOpen(false)

  
  }
  const handleCancel = ()=>{
    setOpen(false)
  }
  const handleChange = (field: string, value: string) => {
    const updatedUser = { ...editUser, [field]: value };
    dispatch(updateUser(updatedUser));
  };
 
  return (
    <div>
      <input
        type="text"
        value={editUser.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />
      <input
        type="text"
        value={editUser.surname}
        onChange={(e) => handleChange('surname', e.target.value)}
      />
      <input
        type="email"
        value={editUser.email}
        onChange={(e) => handleChange('email', e.target.value)}
      />
      <input
        type="text"
        value={editUser.position}
        onChange={(e) => handleChange('position', e.target.value)}
      />

      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>  Cancel</button>
    </div>
  )
}

export default EditUser